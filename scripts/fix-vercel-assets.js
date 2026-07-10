import fs from 'fs';
import path from 'path';

const vercelStatic = path.resolve('.vercel/output/static');
const blastDir = path.join(vercelStatic, 'blast');

if (fs.existsSync(vercelStatic)) {
  if (!fs.existsSync(blastDir)) {
    fs.mkdirSync(blastDir, { recursive: true });
  }

  // Move static assets to the base path directory
  const filesToMove = ['_astro', 'uploads', 'favicon.ico', 'apple-touch-icon.png', 'logo.svg', 'android-chrome-192x192.png', 'android-chrome-512x512.png', 'favicon-16x16.png', 'favicon-32x32.png', 'site.webmanifest'];
  
  filesToMove.forEach(file => {
    const src = path.join(vercelStatic, file);
    const dest = path.join(blastDir, file);
    if (fs.existsSync(src)) {
      fs.renameSync(src, dest);
      console.log(`Moved ${file} to blast/${file}`);
    }
  });

  // Update Vercel config.json cache rule to point to the new _astro location
  const configPath = path.resolve('.vercel/output/config.json');
  if (fs.existsSync(configPath)) {
    let configStr = fs.readFileSync(configPath, 'utf8');
    // Vercel Astro adapter writes "^/_astro/(.*)$" for static asset caching
    if (configStr.includes('"^/_astro/(.*)$"')) {
      configStr = configStr.replace('"^/_astro/(.*)$"', '"^/blast/_astro/(.*)$"');
      fs.writeFileSync(configPath, configStr, 'utf8');
      console.log('Updated .vercel/output/config.json static route mapping');
    }
  }
}
