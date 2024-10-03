import { useCallback, useState } from "react";

type Slide = {
  id: string;
  content: React.ReactNode;
};

interface CarousselProps {
  slides: Slide[];
  interval?: number;
}

const Caroussel: React.FC<CarousselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
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
      className="relative w-3/5 h-full overflow-hidden"
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

      {/* Navigation Buttons */}
      <nav className="absolute flex flex-col gap-2 bottom-2 right-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`${
              currentIndex === index
                ? "bg-Iqanto-orange-300"
                : "bg-Iqanto-orange-200 hover:bg-iqanto-orange-400"
            } rounded-full w-2 h-2 transition-all duration-200 border-none`}
            onClick={() => handleNavClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </nav>
    </div>
  );
};
export default Caroussel;
