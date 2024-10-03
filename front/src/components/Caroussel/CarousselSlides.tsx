import InfoImportantesP1 from "../InfoImportantes/InfoImportantesP1";
import InfoImportantesP2 from "../InfoImportantes/InfoImportantesP2";
import InfoImportantesP3 from "../InfoImportantes/InfoImportantesP3";

const CarousselSlides = [
  { id: '1', content: <div className="w-full h-full bg-green-500 flex items-center justify-center text-black"><InfoImportantesP1/></div> },
  { id: '2', content: <div className="w-full h-full bg-red-500 flex items-center justify-center text-black"><InfoImportantesP2/></div> },
  { id: '3', content: <div className="w-full h-full bg-blue-500 flex items-center justify-center text-black"><InfoImportantesP3/></div> },
  { id: '4', content: <div className="w-full h-full bg-yellow-500 flex items-center justify-center text-black"><InfoImportantesP3/></div> },
  

];
export default CarousselSlides;