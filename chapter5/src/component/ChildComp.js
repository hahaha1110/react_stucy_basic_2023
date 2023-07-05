const ChildComp = () => {
  const handleOnClick = (e) => {
    console.log(e.target.name);
    alert("리액트의 클릭 이벤트");
  };
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h4>나는 Body의 자식 컴포넌트 입니다.</h4>
      <button name="버튼A" onClick={handleOnClick}>
        클릭!
      </button>
      <button name="버튼B" onClick={handleOnClick}>
        클릭2!
      </button>
    </div>
  );
};

export default ChildComp;
