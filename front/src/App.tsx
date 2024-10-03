import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Caroussel from './components/Caroussel/Caroussel';
import CarousselSlides from './components/Caroussel/CarousselSlides'

const App: React.FC = () => {
  return (

    <div className="grid gap-4 grid-cols-[260px,_1fr] relative w-[100%] h-[calc(100vh-90px)]">
      {/* <Test count={count} setCount={setCount} /> */}
      <Sidebar />
      <Dashboard />
      <h1>Informations Importantes</h1>
      <Caroussel slides={CarousselSlides} interval={3000} />
    </div>
  );
};

export default App;