# @luwy-dyro/tokens

Design tokens del CSF Design System.

## Instalación
```powershell
pnpm add @luwy-dyro/tokens
```
Requiere autenticación contra GitHub Packages (ver README de la raíz para opciones con `pnpm login` o `${NPM_TOKEN}`).

## Uso
Importa los CSS en el entry de tu app (orden recomendado):
```css
/* 1) Tokens primero: variables, fuentes y @theme */
@import "@luwy-dyro/tokens/css/preset.css";

/* 2) Tailwind (opcional, si usas utilidades) */
@import "tailwindcss";
```
Luego puedes usar las variables CSS directamente o utilidades de Tailwind como `bg-primary-blue-600`.

### Tipografía
Este paquete incluye fuentes (Poppins) y variables:
- `--font-primary`
- `--font-mono`
- `--font-size-base`
- `--font-weight-regular|medium|semibold|bold`

### Tailwind v4
`preset.css` importa `variables.css` + `fonts.css` + `theme.css` en el orden correcto. Recomendaciones:

- Instala Tailwind v4 si deseas utilidades.
- Importa el preset de tokens ANTES de `@import "tailwindcss";`.

Ejemplo de `src/index.css`:

```css
@import "@luwy-dyro/tokens/css/preset.css";
@import "tailwindcss"; /* opcional */
```

Con esto, Tailwind reconocerá el `@theme {}` del preset y generará utilidades como `bg-primary-blue-600` sin pasos extra.

## Salidas
- CSS: `dist/css/variables.css`, `dist/css/fonts.css`, `dist/css/theme-aliases.css`
- JS: `dist/js/index.js` (tokens en objeto)
- Tipos: `dist/js/index.d.ts`
- Fuentes: `dist/fonts/*`

## Notas
- Generado con Style Dictionary a partir de `tokens.json` → `tokens.clean.json`.
- Si agregas nuevas fuentes, colócalas en `packages/tokens/fonts/` y se copiarán a `dist/fonts/` en el build.
