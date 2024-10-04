import Caroussel from "../Caroussel/Caroussel";
import CarousselSlides from "../SaviezVous/CarousselSlides";

export const BottomRight = () => {
  const flattenedSlides = CarousselSlides.flat();

  return (
    <div className="col-span-2 col-start-5 row-span-5 row-start-6 mr-2">
      <Caroussel slides={flattenedSlides} />
    </div>
  );
};
