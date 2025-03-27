import { useState } from "react";

export default function Counter() {
  const counterStyle = {
    border: "2px solid tomato",
    padding: "10px",
    borderRadius: "20px",
  };

  const [count, setCount] = useState(0);
  function onClickHandler() {
    setCount(count + 1);
  }
  function onClickHandler2() {
    setCount(count - 1);
  }
  function onClickHandler3() {
    setCount(0);
  }
  return (
    <div style={counterStyle}>
      <p>Count: {count}</p>
      <button onClick={onClickHandler}>Add Me</button>
      <button onClick={onClickHandler2}>Sub Me</button>
      <button onClick={onClickHandler3}>Reset Me</button>
    </div>
  );
}
