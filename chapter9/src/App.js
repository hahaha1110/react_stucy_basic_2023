import React, { useCallback, useMemo, useReducer, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

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

  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const indexRef = useRef(2);

  const addTodo = (text) => {
    const newItem = {
      index: indexRef.current,
      isDone: false,
      text,
      date: new Date().toDateString(),
    };

    dispatch({ type: "CREATE", newItem: newItem });

    indexRef.current += 1;
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({ type: "UPDATE", targetId: targetId });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: "DELETE", targetId: targetId });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { addTodo, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
