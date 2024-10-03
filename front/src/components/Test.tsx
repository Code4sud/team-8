import React from "react";

interface TestProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Test: React.FC<TestProps> = ({ count, setCount }) => {
  return (
    <div>
      <p>Ceci est un test</p>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>

      <button
        onClick={() => {
          setCount(() => count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Test;
