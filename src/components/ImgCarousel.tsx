import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCarousel } from '../context/Carousel';
import { useEffect } from 'react';

interface ImgCarouselProps {
  images: string[];
}

const ImgCarousel: React.FC<ImgCarouselProps> = ({ images }) => {
  const { isOpen, closeCarousel, currentImageIndex, setImageIndex } = useCarousel();

  const showPrev = () => {
    setImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const showNext = () => {
    setImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

	const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') closeCarousel();
  };

	useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  if (!isOpen) return null;

  return (
    <div
			className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center'
			onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeCarousel();
        }
			}}
		>
      <div className='relative w-full max-w-3xl p-4 rounded-md'>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          className='w-full h-auto object-contain rounded-md'
        />

        <button
          className='absolute left-[-60px] md:left-[-80px] top-1/2 transform -translate-y-1/2 text-white bg-gray-400/60 hover:bg-gray-500/40 rounded-full p-3 shadow-lg'
          onClick={showPrev}
        >
          <ChevronLeft />
        </button>

        <button
          className='absolute right-[-60px] md:right-[-80px] top-1/2 transform -translate-y-1/2 text-white bg-gray-400/60 hover:bg-gray-500/40 rounded-full p-3 shadow-lg'
          onClick={showNext}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImgCarousel;