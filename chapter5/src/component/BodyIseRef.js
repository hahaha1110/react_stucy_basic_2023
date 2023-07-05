import React, { useRef, useState } from "react";

const BodyIseRef = () => {
  const [text, setText] = useState("");
  const textRef = useRef();
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnclick = () => {
    if (text.length <= 5) {
      textRef.current.focus();
    } else {
      alert(text);
      textRef.current.value = "지웠지롱!";
    }
  };
  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnclick}>작성 완료</button>
    </div>
  );
};

export default BodyIseRef;
