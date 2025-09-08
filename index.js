import express from "express";
import pg from "pg";
import path from "path";
import multer from "multer";
import session from "express-session";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import flash from "connect-flash";
import { fileURLToPath } from 'url';
import methodOverride from "method-override" ;
import dotenv from "dotenv";
dotenv.config();

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.connect((err) => {
    if (err) {
        console.error("Database connection error:", err.stack);
    } else {
        console.log("Database connected successfully.");
    }
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(
    session({
        secret: "sportclub@143@D#",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 30 * 60 * 1000,  // 30 minutes timeout
            httpOnly: true,  // Prevent access to cookies from JavaScript
            secure: false // Set to true if you're using HTTPS
        }
    })
);

app.use(flash());

app.set("view engine", "ejs");

// Middleware to set local variables for flash messages
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 2 * 1024 * 1024 }, // Limit file size to 2 MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Only image files are allowed!"), false);
        }
    },
});

// Routes
app.get("/", (req, res) => {
    res.render("splash");
});

app.get("/home", (req, res) => {
    res.render("index");
});
app.get("/update", (req, res) => {
    res.render("updates"); 
});
// app.get('/home', (req, res) => {
//     res.render('home', { title: 'Home Page' });
// });
// get for the members data..
app.get("/members", (req, res) => {
    const query = "SELECT * FROM members";

    pool.query(query, (err, result) => {
        if (err) {
            console.error("Error fetching members:", err.stack);
            res.status(500).send("Error fetching data.");
            return;
        }

        // Categorize members based on their position or roles
        const members = result.rows;
        const facultyMembers = members.filter(member => member.position.toLowerCase().includes("faculty"));
        const coreMembers = members.filter(member => 
            member.position.toLowerCase().includes("coordinator") || 
            member.position.toLowerCase().includes("advisor")
        );
        const teamMembers = members.filter(member => 
            !member.position.toLowerCase().includes("faculty") && 
            !member.position.toLowerCase().includes("coordinator") && 
            !member.position.toLowerCase().includes("advisor")
        );

        // Render the template with categorized members
        res.render("members", { facultyMembers, coreMembers, teamMembers });
    });
});

app.get('/gallery', (req, res) => {
    // Fetch gallery items from the database
    pool.query('SELECT * FROM gallery', (err, result) => {
        if (err) {
            console.error('Error fetching gallery data:', err);
            res.status(500).send('Something went wrong!');
        } else {
            // Render the gallery.ejs view and pass the gallery items
            res.render('gallery', { gallery: result.rows });
        }
    });
});

app.post('/submit-contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Insert data into the information table
        const query = `
            INSERT INTO information (name, email, message) 
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const values = [name, email, message];
        const result = await pool.query(query, values);

        console.log('Contact added:', result.rows[0]);
        res.status(200).send('Contact submitted successfully!');
    } catch (error) {
        console.error('Error inserting contact:', error);
        res.status(500).send('Error saving contact.');
    }
});

app.get('/sports', async (req, res) => {
    try {
        // Fetch indoor sports
        const indoorSportsResult = await pool.query('SELECT * FROM sports WHERE category = $1 ORDER BY id ASC', ['Indoor']);

        // Fetch outdoor sports
        const outdoorSportsResult = await pool.query('SELECT * FROM sports WHERE category = $1 ORDER BY id ASC', ['Outdoor']);

        // Pass the sports data to the view
        res.render('sports', {
            indoorSports: indoorSportsResult.rows,
            outdoorSports: outdoorSportsResult.rows
        });
    } catch (err) {
        console.error('Error fetching sports:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/registrations", isAuthenticated, (req, res) => {
    res.render("registration", { department: req.session.department });
});
app.get("/admin/registration/:id", isAuthenticated, async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(
            "SELECT name, dob, prn_number, eligibility_number, sport, photo, adhar_card_photo FROM registrations WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            req.flash("error", "No player found with the given ID.");
            return res.redirect("/dashboard");
        }

        const player = result.rows[0];

        const photoBase64 = player.photo.toString("base64");
        const adharCardBase64 = player.adhar_card_photo.toString("base64");

        res.render("player-details", {
            name: player.name,
            dob: player.dob,
            prn_number: player.prn_number,
            eligibility_number: player.eligibility_number,
            sport: player.sport,
            photo: photoBase64,
            adhar_card_photo: adharCardBase64,
        });
    } catch (err) {
        console.error("Error fetching player details:", err);
        req.flash("error", "Error fetching player details.");
        res.redirect("/dashboard");
    }
});

// Route to handle delete request
app.delete('/admin/registration/:id', async (req, res) => {
    const id = req.params.id;

    try {
        await pool.query("DELETE FROM registrations WHERE id = $1", [id]);
        req.flash("success", "Registration deleted successfully.");
    } catch (err) {
        console.error("Error deleting registration:", err);
        req.flash("error", "Error deleting registration.");
    }

    res.redirect("/dashboard");
});
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.redirect("/login");
}

function redirectIfAuthenticated(req, res, next) {
    if (req.session.userId) {
        return res.redirect("/dashboard");  // Redirect to dashboard if user is already logged in
    }
    next();  // Proceed to login page if not logged in
}

app.get("/login", redirectIfAuthenticated, (req, res) => {
    res.render("login");
});

// Handle Login
app.post("/login", redirectIfAuthenticated, async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

        if (result.rows.length === 0) {
            req.flash("error", "Invalid username or password");
            return res.redirect("/login");
        }

        const user = result.rows[0];
        const isValid = await bcrypt.compare(password, user.password);

        if (isValid) {
            req.session.userId = user.id;
            req.session.department = user.department;
            req.flash("success", "Login successful!");
            return res.redirect("/dashboard");
        } else {
            req.flash("error", "Invalid username or password");
            res.redirect("/login");
        }
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send("Error during login");
    }
});

// Logout
app.get("/logout", isAuthenticated, (req, res) => {
    req.session.destroy((err) => {  // Destroy session
        if (err) {
            return res.status(500).send("Error during logout.");
            console.log("Error during logout:", err);
        }
        req.flash("success", "Logged out successfully!");
        res.redirect("/login");  // Redirect to login page
    });
});

// Handle Registration Form Submission
app.post(
    "/register",
    isAuthenticated,
    upload.fields([{ name: "photo" }, { name: "adhar_card_photo" }]),
    async (req, res) => {
        if (!req.files || !req.files.photo || !req.files.adhar_card_photo) {
            req.flash("error", "Please upload both photos.");
            return res.redirect("/registrations");
        }

        const { name, dob, prn_number, eligibility_number, sport } = req.body;

        try {
            const photo = req.files.photo[0].buffer;
            const adharCardPhoto = req.files.adhar_card_photo[0].buffer;

            await pool.query(
                `INSERT INTO registrations (name, dob, prn_number, eligibility_number, sport, photo, adhar_card_photo, created_by) 
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                [name, dob, prn_number, eligibility_number, sport, photo, adharCardPhoto, req.session.userId]
            );

            req.flash("success", "Registration saved successfully!");
            res.redirect("/dashboard");
        } catch (err) {
            console.error("Error saving registration:", err);
            req.flash("error", "Error saving registration. Please try again.");
            res.redirect("/registrations");
        }
    }
);

app.get("/dashboard", isAuthenticated, async (req, res) => {
    const page = Math.max(parseInt(req.query.page) || 1, 1); // Ensure page is a positive integer
    const limit = 10; // Default limit
    const offset = (page - 1) * limit;

    try {
        const countResult = await pool.query("SELECT COUNT(*) FROM registrations");
        const totalCount = parseInt(countResult.rows[0].count, 10);
        const totalPages = Math.ceil(totalCount / limit);

        const result = await pool.query(
            "SELECT * FROM registrations ORDER BY id DESC LIMIT $1 OFFSET $2",
            [limit, offset]
        );

        res.render("dashboard", {
            registrations: result.rows,
            currentPage: page,
            totalPages,
        });
    } catch (err) {
        console.error("Error fetching registrations:", err);
        req.flash("error", "Error fetching registrations.");
        res.redirect("/dashboard");
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
