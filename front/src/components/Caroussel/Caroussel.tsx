import { useCallback, useEffect, useState } from "react";

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

  const disablePageScroll = () => {
    document.body.style.overflowY = "hidden"; // Masque le défilement vertical
  };

  const enablePageScroll = () => {
    document.body.style.overflowY = "hidden"; // Réactive le défilement vertical
  };

  useEffect(() => {
    const carouselElement = document.getElementById("carousel");
    if (carouselElement) {
      carouselElement.addEventListener("mouseenter", disablePageScroll);
      carouselElement.addEventListener("mouseleave", enablePageScroll);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("mouseenter", disablePageScroll);
        carouselElement.removeEventListener("mouseleave", enablePageScroll);
      }
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div
      id="carousel"
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
      <nav className="absolute flex flex-col gap-8 bottom-2 right-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`bg-yellow-300 hover:bg-gray-400 ${
              currentIndex === index ? "bg-gray-500" : ""
            } rounded-full w-4 h-4`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </nav>
    </div>
  );
};

export default Caroussel;
