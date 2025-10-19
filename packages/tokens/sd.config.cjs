// packages/tokens/sd.config.cjs
const StyleDictionary = require('style-dictionary');

// --- 👇 NUEVO: Registra un formato personalizado para @theme ---
StyleDictionary.registerFormat({
  name: 'css/theme',
  formatter: function({ dictionary, options }) {
    let output = '@theme {\n';

    // Añade la fuente si existe
    if (dictionary.properties.font && dictionary.properties.font.primary) {
        output += `  --font-sans: var(--font-primary);\n`;
    }

    // Añade los colores
    if (dictionary.properties.color) {
      dictionary.allProperties.forEach(prop => {
        if (prop.attributes.category === 'color') {
          // ['color','primary','blue','600'] -> 'primary-blue-600'
          const themeKey = prop.path.slice(1).join('-');
          const value = prop.value; // usa el valor literal (ej. #0043a5)
          output += `  --color-${themeKey}: ${value};\n`;
        }
      });
    }

    output += '}';
    return output;
  }
});
// --- FIN DEL NUEVO FORMATO ---

module.exports = {
  source: ['tokens.clean.json'], // Asegúrate que transform-tokens.js ponga todo aquí
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        // 1. Variables CSS (como antes)
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: { selector: ':root' }
        },
        // --- 👇 NUEVO: Genera el archivo theme.css ---
        {
          destination: 'theme.css',
          format: 'css/theme' // Usa el formato que acabamos de registrar
        }
      ]
    },
    js: { // (Tu salida JS sigue igual)
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [{ format: 'javascript/es6', destination: 'index.js' }]
    }
    // ... (Tu script de fuentes sigue igual si lo tenías) ...
  }
};