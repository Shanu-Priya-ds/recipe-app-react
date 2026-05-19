import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import FavoritesContextProvider from './context/FavoritesContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesContextProvider >
        <App />
      </FavoritesContextProvider >
    </BrowserRouter>
  </StrictMode>,
)
