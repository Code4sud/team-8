import "./App.css";
import Test from "./components/Test";
import SaviezVous from "./components/SaviezVous/SaviezVous";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Caroussel from "./components/Caroussel/Caroussel";
import CarousselSlides from "./components/Caroussel/CarousselSlides";
import BarChart from "./components/Emission.tsx";
import TodayGraph from "./components/TodayGraph";
import Page from "./components/EchartPage";
import EChartsDay from "./components/EchartsDay";

const App: React.FC = () => {
  return (
    <div className="grid gap-2 grid-cols-[160px,_1fr] relative w-[100%] h-[calc(100vh-90px)]">
      <Sidebar />
      <Dashboard />
      {/* <TodayGraph /> */}
      <div className="w-full">
        {/* <Page /> */}
        <EChartsDay />
        <BarChart />
      </div>
    </div>
  );
};

export default App;
