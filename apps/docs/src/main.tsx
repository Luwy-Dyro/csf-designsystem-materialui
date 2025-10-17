import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
// 1. Primero importamos las variables de tokens para que existan antes de procesar utilidades Tailwind
import '@luwy-dyro/tokens/dist/css/variables.css'
import '@luwy-dyro/tokens/dist/css/fonts.css'
// 2. Luego Tailwind (index.css con @theme que mapea tokens)
import './index.css'
import App from './App.tsx'
import Ejemplo from './Ejemplo.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    
      <App />

      <Ejemplo></Ejemplo>
    </BrowserRouter>
  </StrictMode>,
)
