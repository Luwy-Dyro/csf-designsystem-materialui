// Copy fonts.css and fonts folder to dist in a cross-platform way
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const srcFontsDir = path.join(root, 'fonts'); // user-provided directory
const distDir = path.join(root, 'dist');
const distCssDir = path.join(distDir, 'css');
const distFontsDir = path.join(distDir, 'fonts');
const staticCssFiles = ['fonts.css', 'theme-aliases.css'];

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return false;
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else copyFile(s, d);
  }
  return true;
}

ensureDir(distDir);
ensureDir(distCssDir);

// Copy CSS files declared en src
for (const cssFile of staticCssFiles) {
  const srcCssPath = path.join(root, 'src', cssFile);
  if (!fs.existsSync(srcCssPath)) {
    console.warn(`${cssFile} no encontrado en ${srcCssPath}`);
    continue;
  }
  copyFile(srcCssPath, path.join(distCssDir, cssFile));
}

// Copy fonts directory
if (!copyDir(srcFontsDir, distFontsDir)) {
  console.warn(`Carpeta de fuentes no encontrada: ${srcFontsDir}`);
}

console.log('✅ Assets estáticos copiados a dist/');
