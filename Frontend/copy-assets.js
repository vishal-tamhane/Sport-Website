import fs from 'fs-extra';
import path from 'path';

// Define source and destination directories
const publicDir = path.resolve('../public');
const uploadsDir = path.join(publicDir, 'uploads');
const assetsDir = path.join(publicDir, 'assets');
const destPublicDir = path.resolve('./public');

// Create destination directories if they don't exist
fs.ensureDirSync(path.join(destPublicDir, 'uploads'));
fs.ensureDirSync(path.join(destPublicDir, 'assets/photos'));
fs.ensureDirSync(path.join(destPublicDir, 'assets/icons'));

// Copy assets and uploads folders
try {
  // Copy uploads
  fs.copySync(uploadsDir, path.join(destPublicDir, 'uploads'), { overwrite: true });
  console.log('Uploads copied successfully');

  // Copy assets
  fs.copySync(assetsDir, path.join(destPublicDir, 'assets'), { overwrite: true });
  console.log('Assets copied successfully');

  console.log('All files copied successfully!');
} catch (err) {
  console.error('Error copying files:', err);
}
