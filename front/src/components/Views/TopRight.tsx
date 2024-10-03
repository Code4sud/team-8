import Caroussel from "../Caroussel/Caroussel";
import CarousselSlides from "../Caroussel/CarousselSlides";

export const TopRight = () => {
  return (
    <div className="flex justify-end col-span-2 col-start-3 row-span-2 p-2">
      <Caroussel slides={CarousselSlides} />
    </div>
  );
};
