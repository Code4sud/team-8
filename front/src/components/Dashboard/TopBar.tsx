import { ChevronLeft, ChevronRight, Sun } from "lucide-react";

interface TopBarProps {
  town: string;
  setTown: (town: string) => void;
}

export const TopBar = ({ town, setTown }: TopBarProps) => {
  function changeTown() {
    if (town === "Marseille") {
      setTown("Bouc-Bel-Air");
    } else {
      setTown("Marseille");
    }
  }
  return (
    <div className="p-2 border-b border-stone-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-3/5 h-12 px-2 rounded-md bg-Iqanto-orange-200">
          <button className="text-Iqanto-white-50" onClick={changeTown}>
            <ChevronLeft />
          </button>
          <p className="text-2xl font-semibold text-Iqanto-white-50">{town}</p>
          <button className="text-Iqanto-white-50" onClick={changeTown}>
            <ChevronRight />
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button className="flex items-center gap-2 p-2 text-xs transition-colors rounded cursor-pointer text-stone-50 hover:bg-Iqanto-orange-50 ">
            <Sun className="text-Iqanto-orange-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
