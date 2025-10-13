import '@csf/tokens/dist/css/variables.css';

import './index.css';

import { Button } from '@csf/ui';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Mi Design System CSF</h1>

      {/* Usando un componente de @csf/ui */}
      <p className="mt-4">Este es un componente importado del paquete UI:</p>
      <Button variant="primary">¡Hola Mundo!</Button>

      {/* Usando clases de Tailwind que consumen tus tokens */}
      <p className="mt-4">Este div usa clases de Tailwind con tus tokens:</p>
      <div className="mt-2 p-4 bg-green-100 border border-green-500 rounded-md">
        Un contenedor estilizado con mis tokens de color.
      </div>
    </div>
  );
}

export default App;