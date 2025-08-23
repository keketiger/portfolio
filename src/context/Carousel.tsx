import { createContext, useState, useContext } from 'react';

interface CarouselContextProps {
  isOpen: boolean;
  openCarousel: (index: number) => void;
  closeCarousel: () => void;
  currentImageIndex: number;
  setImageIndex: (index: number) => void;
}

const CarouselContext = createContext<CarouselContextProps | undefined>(undefined);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('carousel must be used within a Provider');
  }
  return context;
};

interface CarouselProviderProps {
  children: React.ReactNode;
}

export const CarouselProvider: React.FC<CarouselProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCarousel = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeCarousel = () => setIsOpen(false);

  const setImageIndex = (index: number) => setCurrentImageIndex(index);

  return (
    <CarouselContext.Provider value={{ isOpen, openCarousel, closeCarousel, currentImageIndex, setImageIndex }}>
      {children}
    </CarouselContext.Provider>
  );
};
