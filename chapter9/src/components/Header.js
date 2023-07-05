import React from "react";
import "./Header.css";
const Header = () => {
  console.log("헤더가 리렌더 되고 있는가..!");
  return (
    <div className="Header">
      <h1>오늘은📆</h1>
      <h3> {new Date().toDateString()}</h3>
    </div>
  );
};

export default React.memo(Header);
