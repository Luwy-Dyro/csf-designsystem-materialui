const path = require('path');
const fs = require('fs');

// 1. Leemos los tokens limpios que ya generas
const cleanTokensPath = path.join(__dirname, 'tokens.clean.json');
const tokens = JSON.parse(fs.readFileSync(cleanTokensPath, 'utf8'));

// 2. Mapeamos tus tokens de color al formato que Tailwind entiende
const colors = {};
for (const [key, value] of Object.entries(tokens.color)) {
  colors[key] = value.value;
}

// 3. Definimos la configuración del Preset
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Aquí está la magia: incluimos la ruta a tu paquete de UI.
  content: [
    path.join(
      path.dirname(require.resolve('@luwy-dyro/ui/package.json')),
      'dist/**/*.{js,ts,jsx,tsx}'
    ),
  ],
  theme: {
    // Extendemos el tema de Tailwind con tus tokens
    extend: {
      colors: colors,
      fontFamily: {
        // Asignamos tu fuente principal a la categoría 'sans' de Tailwind
        sans: tokens.font.primary.value,
      },
    },
  },
  plugins: [],
};