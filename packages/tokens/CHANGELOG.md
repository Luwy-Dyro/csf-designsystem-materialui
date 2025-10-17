# @luwy-dyro/tokens

## 0.1.2

### Patch Changes

- Add the prebuilt `theme-aliases.css` file so Tailwind v4 consumers get all token-based utilities without maintaining a manual @theme block.

## 0.1.1

### Patch Changes

- Fix: add CSS subpath exports in package.json so consumers can import
  `@luwy-dyro/tokens/dist/css/variables.css` and `fonts.css` without resolver errors.

## 0.1.0

### Minor Changes

- 5eb9002: Initial release of tokens and UI packages published to GitHub Packages.

### Patch Changes

- Add monospace family and base font size variables to fonts.css:

  - `--font-mono`
  - `--font-size-base`

  This improves ergonomics for consumers using typography tokens.
