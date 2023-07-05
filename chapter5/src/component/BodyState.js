import React, { useState } from "react";

const BodyState = () => {
  // const [text, setText] = useState("");
  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };

  // console.log(today);
  // const [date, setDate] = useState(today);

  // const handleDate = (e) => {
  //   setDate(e.target.value);
  // };

  // const [option, setOption] = useState(1);

  // const handleSelectChange = (e) => {
  //   setOption(e.target.value);
  // };

  // console.log("option :: " + option);

  const today = new Date().toISOString().slice(0, 10);

  const variousState = {
    text: "",
    date: "",
    option: "",
  };

  const [state, setState] = useState({ variousState });

  const handleOnState = (e) => {
    console.log("현재 수정 대상 :::" + e.target.name);
    console.log("현재 수정 값 :::" + e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  console.log(state.date);
  return (
    <div>
      <div>
        <input value={state.text} onChange={handleOnState} />
      </div>
      <div>{state.text}</div>
      <h3>날짜 폼</h3>
      <input type="date" value={state.date} onChange={handleOnState} />

      <h3>날짜 폼</h3>
      <select value={state.option} onChange={handleOnState}>
        <option value={1}>1번</option>
        <option value={2}>2번</option>
        <option value={3}>3번</option>
      </select>
    </div>
  );
};

export default BodyState;
