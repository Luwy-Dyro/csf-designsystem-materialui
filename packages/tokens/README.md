# @luwy-dyro/tokens

Design tokens del CSF Design System.

## Instalación
```powershell
pnpm add @luwy-dyro/tokens
```
Requiere autenticación contra GitHub Packages (ver README de la raíz para opciones con `pnpm login` o `${NPM_TOKEN}`).

## Uso
Importa los CSS en el entry de tu app:
```ts
import '@luwy-dyro/tokens/dist/css/variables.css'
import '@luwy-dyro/tokens/dist/css/fonts.css'
```
Luego puedes usar las variables CSS en tus estilos o con Tailwind (si lo configuras para leer variables).

### Tipografía
Este paquete incluye fuentes (Poppins) y variables:
- `--font-primary`
- `--font-mono`
- `--font-size-base`
- `--font-weight-regular|medium|semibold|bold`

## Salidas
- CSS: `dist/css/variables.css`, `dist/css/fonts.css`
- JS: `dist/js/index.js` (tokens en objeto)
- Tipos: `dist/js/index.d.ts`
- Fuentes: `dist/fonts/*`

## Notas
- Generado con Style Dictionary a partir de `tokens.json` → `tokens.clean.json`.
- Si agregas nuevas fuentes, colócalas en `packages/tokens/fonts/` y se copiarán a `dist/fonts/` en el build.
