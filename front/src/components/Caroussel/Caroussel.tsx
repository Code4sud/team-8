import { useState, useCallback } from 'react';

type Slide = {
  id: string;
  content: React.ReactNode;
};

interface CarousselProps {
  slides: Slide[];
  interval?: number;
}

const Caroussel: React.FC<CarousselProps> = ({ slides}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleNavClick = (index: number): void => {
    setCurrentIndex(index);
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div
      className="relative h-96 overflow-hidden"
      onWheel={handleWheel}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateY(${(index - currentIndex) * 100}%)`,
          }}
        >
          {slide.content}
        </div>
      ))}
      <nav className="absolute bottom-4 right-4 flex flex-col">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`bg-gray-300 hover:bg-gray-400 rounded-full w-4 h-4 my-1 ${
              currentIndex === index ? 'bg-gray-500' : ''
            }`}
            onClick={() => handleNavClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </nav>
    </div>
  );
};
export default Caroussel