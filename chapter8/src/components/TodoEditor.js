import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ addTodo }) => {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setText(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    // 빈 칸 입력 방지
    if (!text) {
      inputRef.current.focus();
      return;
    }
    addTodo(text);
    setText("");
  };
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          placeholder="새로운 Todo..."
          value={text}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
