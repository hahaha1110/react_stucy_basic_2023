import React from "react";
import "./TodoItem.css";
const TodoItem = ({ isDone, text, index, date, onUpdate, onDelete }) => {
  console.log(`${index} 번째 글이 리렌더 되는중`);
  const onChangeCheckbox = () => {
    onUpdate(index);
  };
  const onClickBtn = () => {
    onDelete(index);
  };
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{text}</div>
      <div className="date_col">{date}</div>
      <div className="btn_col">
        <button onClick={onClickBtn}>삭제</button>
      </div>
    </div>
  );
};
export default React.memo(TodoItem);
