import React from "react";

const ChildState = ({ number }) => {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h3>자식컴포넌트</h3>
      <p>{number}</p>
    </div>
  );
};

export default ChildState;
