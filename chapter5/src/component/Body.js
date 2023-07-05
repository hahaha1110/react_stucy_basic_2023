import "./Body.css";

const Body = ({ name, location, age, foods }) => {
  const numA = 1;
  const numB = 2;
  const strA = "안녕!";
  const strB = "리액트";

  const objA = {
    a: 1,
    b: 2,
  };

  return (
    <div className="body">
      <h1>
        내 이름은 {name}이고 {location}에 살며 {age}살 입니다.
        <br />
        그리고 {foods}를 좋아합니다.
      </h1>
      <h1>{numA + numB}</h1>
      <h2>{strA + strB}</h2>
      <p>객체 자료형을 표시하고 싶어!</p>
      <h2>{objA.a}</h2>
      <h2>{objA.b}</h2>
    </div>
  );
};

Body.defaultProps = {
  foods: ["떡볶이", "쌀국수", "초밥"],
};

export default Body;
