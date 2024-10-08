import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className="grid gap-1 grid-cols-[190px,_1fr] relative w-[100%] h-[calc(100vh-90px)]">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
