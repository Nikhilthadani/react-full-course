import { useEffect, useRef } from "react";
const UseRefExample = () => {
  const headingRef = useRef();
  const inputRef = useRef();
  const counterRef = useRef(0);

  useEffect(() => {
    headingRef.current.innerText = "REF UPDATED";
    inputRef.current.focus();
  }, []);
  const handleClick = () => {
    counterRef.current = counterRef.current + 10;
    console.log(counterRef.current);
  };
  return (
    <div>
      <h1 ref={headingRef}>Hi</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default UseRefExample;
