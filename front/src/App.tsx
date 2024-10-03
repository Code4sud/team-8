import { useState } from "react";

import "./App.css";
import Test from "./components/Test";
import TodayGraph from "./components/TodayGraph";
import Page from "./components/EchartPage";
import EChartsDay from "./components/EchartsDay";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Test count={count} setCount={setCount} />
      <p className="bg-I"> {count} </p>
      {/* <TodayGraph /> */}
      <div className="w-full">
        {/* <Page /> */}
        <EChartsDay />
      </div>
    </>
  );
}

export default App;
