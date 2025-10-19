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
// Opción recomendada (Tailwind v4): un único preset
import '@luwy-dyro/tokens/css/preset.css'
```
Luego puedes usar las variables CSS en tus estilos o con Tailwind (si lo configuras para leer variables).

### Tipografía
Este paquete incluye fuentes (Poppins) y variables:
- `--font-primary`
- `--font-mono`
- `--font-size-base`
- `--font-weight-regular|medium|semibold|bold`

### Tailwind v4
`preset.css` importa `variables.css` + `fonts.css` + `theme.css` (o `theme-aliases.css` como fallback) en el orden correcto. Asegúrate de:

- Tener Tailwind 4 instalado (plugin de Vite o CLI).
- Importar `@import "tailwindcss";` en tu `index.css` de la app.
- Importar el preset de tokens ANTES de Tailwind o en el mismo "entry" de estilos.
- Añadir una directiva `@source` para que Tailwind escanee tus componentes del paquete UI si los usas.

Ejemplo de `src/index.css` en una app consumidora con Vite:

```
/* tokens primero */
@import "@luwy-dyro/tokens/css/preset.css";

/* dile a Tailwind dónde escanear clases */
@source "./**/*.{html,js,ts,jsx,tsx}";
@source "node_modules/@luwy-dyro/ui/dist/**/*.{js,jsx,ts,tsx}";

/* activa Tailwind */
@import "tailwindcss";
```

Con esto, Tailwind reconocerá el `@theme {}` y generará utilidades como `bg-primary-blue-600` sin necesidad de copiar el `@theme` dentro del proyecto consumidor.

## Salidas
- CSS: `dist/css/variables.css`, `dist/css/fonts.css`, `dist/css/theme-aliases.css`
- JS: `dist/js/index.js` (tokens en objeto)
- Tipos: `dist/js/index.d.ts`
- Fuentes: `dist/fonts/*`

## Notas
- Generado con Style Dictionary a partir de `tokens.json` → `tokens.clean.json`.
- Si agregas nuevas fuentes, colócalas en `packages/tokens/fonts/` y se copiarán a `dist/fonts/` en el build.
