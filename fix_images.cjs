const fs = require('fs');
const path = require('path');

const UNPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
];

const LOGO_URL = 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=150&h=150';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace figma.com URLs with Unsplash images cyclically
  let counter = 0;
  content = content.replace(/https:\/\/s3-alpha-sig\.figma\.com\/img\/[^"']+/g, (match) => {
    // If it looks like a logo or avatar, use LOGO_URL
    if (match.includes('0a5d5473989ba4ec575b8af8fe1f746c')) {
      return LOGO_URL;
    }
    const url = UNPLASH_IMAGES[counter % UNPLASH_IMAGES.length];
    counter++;
    return url;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated images in: ${filePath}`);
  }
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverseDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverseDirectory(path.join(__dirname, 'src', 'components'));
console.log('Done fixing images.');
