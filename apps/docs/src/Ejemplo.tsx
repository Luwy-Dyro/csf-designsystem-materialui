import { Button } from '@luwy-dyro/ui';

function Ejemplo() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Mi Design System CSF — Ejemplos de Button</h1>

      {/* Variantes básicas */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Variantes</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="primary">Primary (Azul)</Button>
          <Button variant="primary-blue">Primary Blue</Button>
          <Button variant="primary-green">Primary Green</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="error">Error</Button>
          <Button variant="info">Info</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="success">Success</Button>
          <Button variant="neutro-black">Neutro Black</Button>
          <Button variant="neutro-white">Neutro White</Button>
        </div>
      </section>

      {/* Tamaños */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Tamaños</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="small" variant="primary">Small</Button>
          <Button size="medium" variant="primary">Medium</Button>
          <Button size="large" variant="primary">Large</Button>
        </div>
      </section>

      {/* Pesos tipográficos */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Weights</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Button weight="regular" variant="primary">Regular</Button>
          <Button weight="medium" variant="primary">Medium</Button>
          <Button weight="semibold" variant="primary">Semibold</Button>
          <Button weight="bold" variant="primary">Bold</Button>
        </div>
      </section>

      {/* Colores personalizados por tokens */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Colores personalizados (bgToken)</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Button bgToken="primary-green" bgLevel={200} hoverLevel={300}>Primary Green 200→300</Button>
          <Button bgToken="primary-green" bgLevel={400} hoverLevel={500}>Primary Green 400→500</Button>
          <Button bgToken="alert-error" bgLevel={500} hoverLevel={600}>Alert Error 500→600</Button>
          <Button bgToken="alert-success" bgLevel={500} hoverLevel={600}>Alert Success 500→600</Button>
          <Button bgToken="neutro-black" bgLevel={500} hoverLevel={600}>Neutro Black 500→600</Button>
          <Button bgToken="neutro-white" bgLevel={600} hoverLevel={700}>Neutro White 600→700</Button>
        </div>
      </section>

      {/* Ejemplo Tailwind consumiendo tokens */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Tailwind con tokens</h2>
        <p>Este div usa clases de Tailwind con tus tokens:</p>
        <div className="mt-2 p-4 bg-primary-green-100 border border-primary-green-500 rounded-md">
          Un contenedor estilizado con tokens de color.
        </div>
      </section>

        {/* Spacing y Radius desde @theme */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Spacing y Radius desde @theme</h2>
          <div className="grid gap-1-5 grid-cols-1 md:grid-cols-3">
            <div className="p-0-75 bg-primary-blue-50 border border-primary-blue-400 rounded-small">
              <p className="text-primary-blue-700">p-0-75 y rounded-small</p>
            </div>
            <div className="p-1 bg-primary-blue-50 border border-primary-blue-400 rounded-medium">
              <p className="text-primary-blue-700">p-1 y rounded-medium</p>
            </div>
            <div className="p-1-5 bg-primary-blue-50 border border-primary-blue-400 rounded-large">
              <p className="text-primary-blue-700">p-1-5 y rounded-large</p>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Ejemplo;