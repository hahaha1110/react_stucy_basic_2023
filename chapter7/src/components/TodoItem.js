import "./TodoItem.css";
const TodoItem = ({ isDone, text, index, date, onUpdate, onDelete }) => {
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

export default TodoItem;
