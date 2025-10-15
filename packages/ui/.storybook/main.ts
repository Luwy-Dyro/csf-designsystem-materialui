import type { StorybookConfig } from '@storybook/react-vite';
import tailwind from '@tailwindcss/vite';

// Configuración simplificada: en pnpm monorepo no necesitamos resolver rutas manualmente.
const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    // '@storybook/addon-vitest' // Desactivado temporalmente para aislar crash en Windows
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins || []), tailwind()];
    return config;
  },
};
export default config;