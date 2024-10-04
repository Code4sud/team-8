import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type Slide = {
  id: string;
  content: React.ReactNode;
};

interface CarousselProps {
  slides: Slide[];
  interval?: number;
}

const Carousel = ({ slides }: CarousselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full transition-transform duration-300"
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full h-full"
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Flèches de navigation */}
      <button
        className="absolute right-0 p-1 text-gray-800 rounded-md top-2 hover:bg-Iqanto-orange-100 hover:text-Iqanto-white-50"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronUp />
      </button>
      <button
        className="absolute right-0 p-1 text-gray-800 rounded-md bottom-2 hover:bg-Iqanto-orange-100 hover:text-Iqanto-white-50"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronDown />
      </button>
    </div>
  );
};

export default Carousel;
