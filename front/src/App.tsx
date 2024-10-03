import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./components/Test";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Test count={count} setCount={setCount} />
      <p> {count} </p>
    </>
  );
}

export default App;
