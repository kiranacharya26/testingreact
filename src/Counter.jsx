import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("clicked");
  }, [count]);
  return (
    <>
      <p>Count is:{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default Counter;
