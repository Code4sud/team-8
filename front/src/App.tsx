import { useState } from "react";

import "./App.css";
import Test from "./components/Test";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Test count={count} setCount={setCount} />
      <p className="bg-I"> {count} </p>
    </>
  );
}

export default App;
