// packages/tokens/transform-tokens.js
const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'tokens.json');
const OUTPUT_FILE = path.join(__dirname, 'tokens.clean.json');

// --- Función flattenObject (sin cambios) ---
function flattenObject(obj, prefix = '') {
  // ... (tu función flattenObject se queda igual) ...
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}-${key.toLowerCase().replace(/\s+/g, '-')}` : key.toLowerCase().replace(/\s+/g, '-'); // Reemplaza espacios también
      const value = obj[key];
      if (typeof value === 'object' && value !== null && !value.hasOwnProperty('value')) {
        Object.assign(result, flattenObject(value, newKey));
      } else {
        // Guarda solo el valor si existe, si no, el objeto completo
        result[newKey] = value && value.hasOwnProperty('value') ? value : value; 
      }
    }
  }
  return result;
}


try {
  if (!fs.existsSync(INPUT_FILE)) {
    throw new Error(`Error: El archivo de entrada no se encontro en: ${INPUT_FILE}`);
  }

  const rawTokens = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf-8'));


  // 1. Extraer y aplanar colores (como antes)
  const color = flattenObject(rawTokens['Colors/Mode 1'].Color);

  // 2. Extraer y preparar datos de fuentes
  const font = {};
  // Extrae la familia de fuente principal (ajusta la ruta si es necesario)
  if (rawTokens['Font theme/Desktop']?.Static?.Font?.Family) {
      // Usamos una clave simple 'primary' para accederla fácilmente en el preset
      font['primary'] = rawTokens['Font theme/Desktop'].Static.Font.Family; 
  } else {
      console.warn("Warning: Font family not found at expected path in tokens.json");
  }

  // 3. (Opcional) Extraer otros tokens si los necesitas (ej: spacing)
  // const spacing = flattenObject(rawTokens['Layout/Desktop'].spacing);

  // 4. Escribir el nuevo archivo JSON limpio CON TODAS LAS SECCIONES
  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(
      { 
        color, 
        font, 
        // spacing // <-- Añadirías otras secciones aquí
      }, 
      null, 
      2
    )
  );
  // --- FIN DE MODIFICACIONES ---

  console.log(`✅ Tokens procesados exitosamente (incluyendo fuentes) y guardados en ${OUTPUT_FILE}`);

} catch (error) {
  console.error('❌ Ocurrió un error al procesar los tokens:');
  console.error(error.message);
  process.exit(1);
}