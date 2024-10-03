import "./App.css";
import Test from "./components/Test";
import SaviezVous from "./components/SaviezVous/SaviezVous";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-[260px,_1fr] relative w-[100%] h-[calc(100vh-90px)]">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
