import { useState } from "react";
import { BottomLeft } from "../Views/BottomLeft";
import { BottomRight } from "../Views/BottomRight";
import { TopLeft } from "../Views/TopLeft";
import { TopRight } from "../Views/TopRight";
import { TopBar } from "./TopBar";

export const Dashboard = () => {
  const [town, setTown] = useState<string>("Marseille");

  return (
    <div className="pb-4 rounded-lg shadow bg-Iqanto-white-50 h-[calc(100vh-80px-80px)] relative w-full">
      {/* TopBar occupera toute la largeur du dashboard */}
      <TopBar town={town} setTown={setTown} />
      <div className="grid h-full grid-cols-6 gap-4 grid-rows-10">
        {/* TopRight occupera les deux dernières colonnes et les deux premières lignes */}
        <TopRight />
        <TopLeft town={town} />
        <BottomLeft town={town} />
        {/* BottomRight occupera les deux dernières colonnes et les deux dernières lignes */}
        <BottomRight />
      </div>
    </div>
  );
};
