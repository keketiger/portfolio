import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CarouselProvider } from './context/Carousel.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarouselProvider>
      <App />
    </CarouselProvider>
  </StrictMode>,
)
