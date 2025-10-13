import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, 
    }),
  ],
  build: {
    // Configuración para construir como una librería
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Tu archivo de entrada principal
      name: 'csf-ui', // Nombre global para UMD build (menos importante para ti)
      fileName: (format) => `csf-ui.${format}.js`,
    },
    // Opciones de Rollup (el empaquetador que Vite usa por debajo)
    rollupOptions: {
      // Asegúrate de externalizar dependencias que no deben ser empaquetadas
      // en tu librería, como React.
      external: ['react', 'react-dom'],
      output: {
        // Proporciona variables globales para usar en el build UMD
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});