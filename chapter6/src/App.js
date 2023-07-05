import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useEffect, useRef, useState } from "react";
import EvenCount from "./components/EvenCount";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const countHandler = (e) => {
    setCount(Number(count) + Number(e.target.innerText));
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트!");
    }
    const intervalId = setInterval(() => {
      console.log("깜빡");
    }, 1000);

    return () => {
      console.log("클린업");
      clearInterval(intervalId);
    };
  });

  useEffect(() => {
    console.log("컴포넌트 마운트 :::");
  }, []);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 == 0 && <EvenCount />}
      </section>
      <section>
        <input value={text} onChange={textHandler} />
      </section>
      <section>
        <Controller countHandler={countHandler} />
      </section>
    </div>
  );
}

export default App;
