// Copy fonts.css and fonts folder to dist in a cross-platform way
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const srcCss = path.join(root, 'src', 'fonts.css');
const srcFontsDir = path.join(root, 'fonts'); // user-provided directory
const distDir = path.join(root, 'dist');
const distCssDir = path.join(distDir, 'css');
const distFontsDir = path.join(distDir, 'fonts');

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

// Copy CSS
if (!fs.existsSync(srcCss)) {
  console.warn(`fonts.css no encontrado en ${srcCss}`);
} else {
  copyFile(srcCss, path.join(distCssDir, 'fonts.css'));
}

// Copy fonts directory
if (!copyDir(srcFontsDir, distFontsDir)) {
  console.warn(`Carpeta de fuentes no encontrada: ${srcFontsDir}`);
}

console.log('✅ Fuentes copiadas a dist/');
