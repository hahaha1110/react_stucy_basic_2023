import React, { useState } from "react";
import ChildState from "./ChildState";

const BodyState2 = () => {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <React.Fragment>
      <h2>Props를 자식컴포넌트로 전달하기</h2>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
      <ChildState number={number} />
    </React.Fragment>
  );
};

export default BodyState2;
