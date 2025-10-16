import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { HeaderComponent } from './HeaderComponent';
import { Footer } from './Footer';

export const ComponentLayout = () => {
  return (
    // Contenedor principal que organiza todo en una columna vertical
    <div className="min-h-screen flex flex-col ">

      {/* 1. Cuerpo principal de la app (ocupa el espacio disponible) */}
      <div className="flex items-start">
        <Sidebar />
        
        {/* Contenido principal a la derecha del sidebar */}
        <main className="flex-1 pl-8 pr-9 pb-20">
          <HeaderComponent />
          <Outlet /> {/* Aquí se renderizan las páginas */}
        </main>
      </div>

      {/* 2. Footer (ocupa el 100% del ancho al final) */}
      <Footer />

    </div>
  );
};