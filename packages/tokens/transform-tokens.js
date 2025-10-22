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

  // 3. Extraer otros tokens (spacing, radius) y normalizar si es necesario
  // Spacing: proviene de "Layout/Desktop".spacing con valores numéricos; normalizamos claves a formato tailwind-friendly (ej. 0-25, 1-5)
  let spacing = {};
  try {
    const rawSpacing = rawTokens['Layout/Desktop']?.spacing;
    if (rawSpacing) {
      const flat = flattenObject(rawSpacing);
      const map = new Map();
      for (const [rawKey, rawVal] of Object.entries(flat)) {
        // Coerciona números a dimensiones en px para uso directo en CSS
        let valObj;
        if (rawVal && typeof rawVal === 'object' && 'value' in rawVal) {
          const val = rawVal.value;
          valObj = typeof val === 'number' ? { value: `${val}px`, type: 'dimension' } : { value: `${val}`, type: 'dimension' };
        } else if (typeof rawVal === 'number') {
          valObj = { value: `${rawVal}px`, type: 'dimension' };
        } else {
          // Si viene en otro formato, intenta conservarlo tal cual
          valObj = rawVal;
        }

        // Normaliza nombre de clave:
        // - quita prefijo redundante 'spacing-'
        // - reemplaza comas por '-'
        // - quita sufijo 'rem'
        // - colapsa múltiples '-'
        let key = rawKey.toLowerCase();
        if (key.startsWith('spacing-')) key = key.replace(/^spacing-/, '');
        key = key.replace(/,/g, '-');
        key = key.replace(/rem$/i, '');
        key = key.replace(/\s+/g, '-').replace(/--+/g, '-').replace(/^-+|-+$/g, '');

        // Solo considera claves tipo escala (evita vacías o no numéricas)
        // Acepta patrones como '0', '0-25', '1', '1-5', '2', '2-5', etc.
        if (/^\d+(?:-\d+)?$/.test(key)) {
          map.set(key, valObj); // el último valor visto gana (dedupe)
        }
      }

      spacing = Object.fromEntries(map.entries());
    }
  } catch (e) {
    console.warn('Warning: could not extract spacing tokens:', e?.message || e);
  }

  // Radius: tomamos los valores ya resueltos en px desde "Shape/Mode 1".Corner.radius.radius
  let radius = {};
  try {
    const rawRadius = rawTokens['Shape/Mode 1']?.Corner?.radius?.radius;
    if (rawRadius) {
      const flatR = flattenObject(rawRadius);
      radius = Object.fromEntries(
        Object.entries(flatR).map(([k, v]) => {
          if (v && typeof v === 'object' && 'value' in v) {
            const val = v.value;
            // Asegura unidad px cuando sea número, aunque en la fuente suelen venir como "12px"
            if (typeof val === 'number') {
              return [k, { value: `${val}px`, type: 'dimension' }];
            }
            return [k, { value: `${val}`, type: 'dimension' }];
          }
          if (typeof v === 'number') {
            return [k, { value: `${v}px`, type: 'dimension' }];
          }
          return [k, v];
        })
      );
    }
  } catch (e) {
    console.warn('Warning: could not extract radius tokens:', e?.message || e);
  }

  // 4. Escribir el nuevo archivo JSON limpio CON TODAS LAS SECCIONES
  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(
      { 
        color, 
        font, 
        spacing,
        radius
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