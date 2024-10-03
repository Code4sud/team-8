import { useState } from "react";

import "./App.css";
import Test from "./components/Test";
import SaviezVous from "./components/SaviezVous/SaviezVous";


function App() {
  const [count, setCount] = useState<number>(0);


  return (
    <>
      <Test count={count} setCount={setCount} />
      <p className="bg-I"> {count} </p>
      <SaviezVous />
    </>
  );
}

export default App;
