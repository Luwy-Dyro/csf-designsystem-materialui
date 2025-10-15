import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 1. Primero importamos las variables de tokens para que existan antes de procesar utilidades Tailwind
import '@luwy-dyro/tokens/dist/css/variables.css'
import '@luwy-dyro/tokens/dist/css/fonts.css'
// 2. Luego Tailwind (index.css con @theme que mapea tokens)
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
