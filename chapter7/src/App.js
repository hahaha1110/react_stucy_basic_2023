import { useReducer, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import TestComp from "./components/TestComp";
import TestCompUseReduc from "./components/TestCompUseReduc";

function App() {
  const today = new Date().toDateString();
  // 테스트용 목업 데이터
  const mockTodo = [
    {
      index: 0,
      isDone: false,
      text: "test",
      date: today,
    },
    {
      index: 1,
      isDone: false,
      text: "test2",
      date: today,
    },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "CREATE":
        return [action.newItem, ...state];
      case "UPDATE":
        return state.map((it) =>
          it.index == action.targetId ? { ...it, isDone: !it.isDone } : it
        );
      case "DELETE":
        return state.filter((it) => it.index !== action.targetId);
      default:
        return state;
    }
  };

  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const indexRef = useRef(2);

  const addTodo = (text) => {
    const newItem = {
      index: indexRef.current,
      isDone: false,
      text,
      date: new Date().toDateString(),
    };
    // setTodo([newItem, ...todo]);

    dispatch({ type: "CREATE", newItem: newItem });

    indexRef.current += 1;
  };

  const onUpdate = (targetId) => {
    // setTodo(
    //   todo.map((it) =>
    //     it.index == targetId ? { ...it, isDone: !it.isDone } : it
    //   )
    // );
    dispatch({ type: "UPDATE", targetId: targetId });
  };

  const onDelete = (targetId) => {
    // setTodo(todo.filter((it) => it.index !== targetId));
    dispatch({ type: "DELETE", targetId: targetId });
  };
  return (
    <div className="App">
      {/* <TestCompUseReduc /> */}
      {/* <TestComp /> */}
      <Header today={today} />
      <TodoEditor addTodo={addTodo} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
