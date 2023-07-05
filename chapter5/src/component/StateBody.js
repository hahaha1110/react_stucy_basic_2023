import { useState } from "react";

const StateBody = () => {
  console.log("update!!!!!!!!!!");
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default StateBody;
