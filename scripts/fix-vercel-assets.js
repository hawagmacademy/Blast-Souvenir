import fs from 'fs';
import path from 'path';

const vercelStatic = path.resolve('.vercel/output/static');
const blastDir = path.join(vercelStatic, 'blast');

if (fs.existsSync(vercelStatic)) {
  if (!fs.existsSync(blastDir)) {
    fs.mkdirSync(blastDir, { recursive: true });
  }

  // Move static assets that Astro doesn't automatically prefix
  const filesToMove = ['uploads', 'favicon.ico', 'apple-touch-icon.png', 'logo.svg', 'android-chrome-192x192.png', 'android-chrome-512x512.png', 'favicon-16x16.png', 'favicon-32x32.png', 'site.webmanifest'];
  
  filesToMove.forEach(file => {
    const src = path.join(vercelStatic, file);
    const dest = path.join(blastDir, file);
    if (fs.existsSync(src)) {
      fs.renameSync(src, dest);
      console.log(`Moved ${file} to blast/${file}`);
    }
  });
}
