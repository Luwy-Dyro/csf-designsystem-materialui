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
import '@luwy-dyro/tokens/dist/css/theme-aliases.css'
```
Luego puedes usar las variables CSS en tus estilos o con Tailwind (si lo configuras para leer variables).

### Tipografía
Este paquete incluye fuentes (Poppins) y variables:
- `--font-primary`
- `--font-mono`
- `--font-size-base`
- `--font-weight-regular|medium|semibold|bold`

### Tailwind v4
`theme-aliases.css` registra los tokens dentro del at-rule `@theme`. Con Tailwind 4 basta con importarlo después de `variables.css` para que se generen utilidades como `bg-primary-blue-600` y `hover:bg-alert-error-500` sin safelist manual.

## Salidas
- CSS: `dist/css/variables.css`, `dist/css/fonts.css`, `dist/css/theme-aliases.css`
- JS: `dist/js/index.js` (tokens en objeto)
- Tipos: `dist/js/index.d.ts`
- Fuentes: `dist/fonts/*`

## Notas
- Generado con Style Dictionary a partir de `tokens.json` → `tokens.clean.json`.
- Si agregas nuevas fuentes, colócalas en `packages/tokens/fonts/` y se copiarán a `dist/fonts/` en el build.
