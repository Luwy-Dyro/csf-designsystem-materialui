// packages/tokens/transform-tokens.js
const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'tokens.json');
const OUTPUT_FILE = path.join(__dirname, 'tokens.clean.json');

// Función para aplanar el objeto y limpiar las claves
function flattenObject(obj, prefix = '') {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}-${key.toLowerCase()}` : key.toLowerCase();
      const value = obj[key];
      if (typeof value === 'object' && value !== null && !value.hasOwnProperty('value')) {
        Object.assign(result, flattenObject(value, newKey));
      } else {
        result[newKey] = value;
      }
    }
  }
  return result;
}

try {
  // Verificar si el archivo de entrada existe
  if (!fs.existsSync(INPUT_FILE)) {
    throw new Error(`Error: El archivo de entrada no se encontro en: ${INPUT_FILE}`);
  }

  // Leer y parsear el JSON original
  const rawTokens = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf-8'));

  // Extraer y aplanar solo las secciones que nos interesan
  const color = flattenObject(rawTokens['Colors/Mode 1'].Color);

  // Escribir el nuevo archivo JSON limpio
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ color }, null, 2));

  console.log(`✅ Tokens procesados exitosamente y guardados en ${OUTPUT_FILE}`);

} catch (error) {
  console.error('❌ Ocurrió un error al procesar los tokens:');
  console.error(error.message);
  process.exit(1); // Salir con un código de error para que el build falle
}