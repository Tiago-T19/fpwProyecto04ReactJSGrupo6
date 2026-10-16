// mayuscula --> Componente
import { StrictMode } from 'react'
// metodo o funcion
import { createRoot } from 'react-dom/client'

// componente app
import App from './App.jsx'

// renderizar es construir o dibujar la vista
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
