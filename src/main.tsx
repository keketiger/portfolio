import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { CarouselProvider } from './context/Carousel.tsx';
import { HashRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <CarouselProvider>
        <App />
      </CarouselProvider>
    </HashRouter>
  </StrictMode>,
)
