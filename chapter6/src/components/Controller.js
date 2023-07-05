const Controller = ({ countHandler }) => {
  return (
    <div>
      <button onClick={countHandler}>-1</button>
      <button onClick={countHandler}>-10</button>
      <button onClick={countHandler}>-100</button>
      <button onClick={countHandler}>+100</button>
      <button onClick={countHandler}>+10</button>
      <button onClick={countHandler}>+1</button>
    </div>
  );
};

export default Controller;
