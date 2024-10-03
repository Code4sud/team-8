import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  /* const [count, setCount] = useState<number>(0); */

  return (
    <div className="grid gap-4 grid-cols-[260px,_1fr] relative w-[100%] h-[calc(100vh-90px)]">
      {/* <Test count={count} setCount={setCount} /> */}
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
