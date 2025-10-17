import { useLocation } from "react-router-dom";

export const HeaderComponent = () => {
  const location = useLocation();

    const routeTitles: { [key: string]: string } = {
    '/component/buttons': 'Buttons',
    '/component/colores': 'Colores',
    '/component/tipografia': 'Tipografía',
    '/component/otros': 'Otros Componentes',
  };

  const title = routeTitles[location.pathname] || 'Component';

  return (
    <header className="bg-white sticky top-0 z-1000 pt-6 rounded-b-lg">
      <div className="bg-primary-green-600 shadow-sm px-6 py-3.5 rounded-lg mb-10  ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-white">{title}</h1>
        </div>
      </div>
    </header>
  );
};
