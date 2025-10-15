import { Button } from '@csf/ui';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Mi Design Sssystem CSF</h1>

      {/* Usando un componente de @csf/ui */}

    <Button variant="primary">Azul</Button>
    <Button variant="primary-green">Verde</Button>
    <Button bgToken="primary-green" bgLevel={200} hoverLevel={50}>Error</Button>
    <Button bgToken="alert-error" bgLevel={500} hoverLevel={600}>Error</Button>
    <Button bgToken="alert-success" bgLevel={500} hoverLevel={600}>Success</Button>
    <Button bgToken="neutro-black" bgLevel={500} hoverLevel={600}>Negro</Button>
    <Button bgToken="primary-green" bgLevel={400} hoverLevel={500}>Verde 400→500</Button>

    <hr />
    <Button weight="regular">Texto</Button>
    <Button weight="medium" bgToken="alert-success" bgLevel={500}>OK</Button>

    <p className="mt-4">Este es un componente importado del paquete UI:</p>
    {/* Usando clases de Tailwind que consumen tus tokens (las variables ahora se importan en main.tsx) */}
      <p className="mt-4">Este div usa clases de Tailwind con tus tokens:</p>
      <div className="mt-2 p-4 bg-green-100 border border-green-500 rounded-md">
        Un contenedor estilizado con mis tokens de color.
      </div>
    </div>
  );
}

export default App;