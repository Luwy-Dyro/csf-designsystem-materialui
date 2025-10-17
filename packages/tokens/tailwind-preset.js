const path = require('path');
const fs = require('fs');

// 1. Leemos los tokens limpios que ya generas
const cleanTokensPath = path.join(__dirname, 'tokens.clean.json');
let tokens;
try {
  tokens = JSON.parse(fs.readFileSync(cleanTokensPath, 'utf8'));
} catch (error) {
  console.error(`Error reading or parsing ${cleanTokensPath}:`, error);
  // Si no se pueden leer los tokens, exporta una configuración mínima para evitar crashes
  module.exports = { content: [], theme: {}, plugins: [] };
  return; // Detiene la ejecución si falla la lectura
}


// 2. Mapeamos tus tokens de color a VARIABLES CSS
const colors = {};
if (tokens.color) { // Verifica que tokens.color exista
  for (const [key, tokenData] of Object.entries(tokens.color)) {
    // Asume que la clave en JSON es algo como 'color-primary-blue-600'
    // Y la clase de Tailwind será 'bg-primary-blue-600'
    // Necesitamos la clave SIN el prefijo 'color-' para el tema de Tailwind
    const themeKey = key.replace(/^color-/, ''); 
    colors[themeKey] = `var(--${key})`; // <-- Asigna la variable CSS
  }
} else {
    console.warn(`Warning: 'color' key not found in ${cleanTokensPath}. No colors will be added to Tailwind theme.`);
}


// 3. Mapeamos la fuente (¡ASEGÚRATE DE QUE tokens.font EXISTA EN EL JSON!)
let fontFamily = {};
if (tokens.font && tokens.font['font-primary'] && tokens.font['font-primary'].value) {
    fontFamily.sans = `var(--font-primary)`; // <-- Asigna la variable CSS
} else {
    console.warn(`Warning: Font data ('font.font-primary.value') not found in ${cleanTokensPath}. Default Tailwind fonts will be used.`);
    // Opcional: Podrías definir un fallback aquí si quieres
    // fontFamily.sans = ['ui-sans-serif', 'system-ui']; 
}

// 4. Definimos la configuración del Preset
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // La ruta a los archivos compilados del paquete de UI
    path.join(
      path.dirname(require.resolve('@luwy-dyro/ui/package.json')),
      'dist/**/*.{js,ts,jsx,tsx}' // Escanea JS y TS (declaraciones)
    ),
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: fontFamily,
      // Aquí añadirías mapeos para spacing, borderRadius, etc., si los tienes
    },
  },
  plugins: [],
};