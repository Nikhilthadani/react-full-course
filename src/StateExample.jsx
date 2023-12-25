import { useState } from "react";
const StateExample = () => {
  const [count, setCount] = useState(0);
  console.log("Component Rerendered");

  const increment = () => {
    // setCount(count + 1); //scheduled at count was 0
    // setCount(count + 1); // scheduled at count was 0
    // setCount(count + 1); // scheduled at count was 0

    // -------
    setCount((prev) => prev + 1); // scheduled at latest state (last state value)
    setCount((prev) => prev + 1); // scheduled at latest state (last state value)
    setCount((prev) => prev + 1); // scheduled at latest state (last state value)
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StateExample;
