import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scrolling effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div id="header" className="pb-1 mb-1">
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[1000] transition-all duration-600 rounded-xl backdrop-blur-md ${
          scrolled ? "bg-white/90 shadow-lg py-2" : "bg-white/80 py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="no-underline">
              <p
                className={`transition-all duration-300 ${
                  scrolled ? "text-3xl" : "text-4xl"
                } font-medium text-[#103d01] font-['Trebuchet_MS',_'Lucida_Sans_Unicode',_'Lucida_Grande',_'Lucida_Sans',_Arial,_sans-serif]`}
              >
                SPORT Club
              </p>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex gap-8">
                <li>
                  <Link
                    to="/home"
                    className="nav-link text-lg font-medium text-[#017979] hover:text-black transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/updates"
                    className="nav-link text-lg font-medium text-[#017979] hover:text-black transition-colors"
                  >
                    Updates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="nav-link text-lg font-medium text-[#017979] hover:text-black transition-colors"
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sports"
                    className="nav-link text-lg font-medium text-[#017979] hover:text-black transition-colors"
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="nav-link text-lg font-medium text-[#017979] hover:text-black transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/members"
                    className="nav-link text-lg font-medium text-[#017979] hover:text-black transition-colors"
                  >
                    Members
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#017979] hover:text-black focus:outline-none p-2 bg-white/80 rounded-lg shadow-md"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-4 bg-white/95 backdrop-blur-md rounded-xl z-[1001] transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-[#103d01] focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <ul className="flex flex-col space-y-6 text-center">
              <li>
                <Link
                  to="/home"
                  className="text-2xl font-medium text-[#017979] hover:text-black transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/updates"
                  className="text-2xl font-medium text-[#017979] hover:text-black transition-colors"
                  onClick={toggleMenu}
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-2xl font-medium text-[#017979] hover:text-black transition-colors"
                  onClick={toggleMenu}
                >
                  Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className="text-2xl font-medium text-[#017979] hover:text-black transition-colors"
                  onClick={toggleMenu}
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-2xl font-medium text-[#017979] hover:text-black transition-colors"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/members"
                  className="text-2xl font-medium text-[#017979] hover:text-black transition-colors"
                  onClick={toggleMenu}
                >
                  Members
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
