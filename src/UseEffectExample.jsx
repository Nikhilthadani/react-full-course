import { useEffect, useState } from "react";
const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect Ran");

    return () => {
      // cleanup
      console.log("CLEANUP");
    };
  }, [count]);
  console.log("Rendered Component");
  return (
    <div>
      <div>Effect</div>
      <div>count is {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectExample;
