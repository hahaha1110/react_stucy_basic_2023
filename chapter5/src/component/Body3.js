const Body3 = () => {
  const number = 2;

  return (
    <header>
      <h1>조건부 렌더링</h1>
      <h2>{number % 2 == 0 ? "짝수" : "홀수"}</h2>
    </header>
  );
};

export default Body3;
