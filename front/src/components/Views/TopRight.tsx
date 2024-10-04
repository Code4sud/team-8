import Caroussel from "../Caroussel/Caroussel";
import CarousselSlides from "../Caroussel/CarousselSlides";

export const TopRight = () => {
  const flattenedSlides = CarousselSlides.flat();

  return (
    <div className="flex justify-end col-span-2 col-start-5 row-span-5 row-start-1 mt-1 mr-2">
      <Caroussel slides={flattenedSlides} />
    </div>
  );
};
