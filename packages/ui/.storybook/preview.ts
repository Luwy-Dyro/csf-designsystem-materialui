import type { Preview } from '@storybook/react-vite'
// 1. Importa tokens primero
import '@csf/tokens/dist/css/variables.css';
import '@csf/tokens/dist/css/fonts.css';
// 2. Importa el CSS global de Storybook que activa Tailwind y mapea tokens
import './preview.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;