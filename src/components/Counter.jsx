import { useRef, useState } from "react";

export default function Counter() {
  const counterStyle = {
    border: "2px solid tomato",
    padding: "10px",
    borderRadius: "20px",
  };

  const [count, setCount] = useState(0);

  const btnRef = useRef(null);

  const [name, setName] = useState("Hasib");

  console.log(name);

  function onClickHandler() {
    setCount(count + 1);
  }
  function onClickHandler2() {
    setCount(count - 1);
  }
  function onClickHandler3() {
    setCount(0);
  }

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };

  const handleSubmitBtn2 = (e) => {
    e.preventDefault();
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    console.log(btnRef.current.value);
  };

  return (
    <>
      <div style={counterStyle}>
        <p>Count: {count}</p>
        <div className="flex gap-2">
          <button className="btn btn-primary" onClick={onClickHandler}>
            Add Me
          </button>
          <button className="btn btn-primary" onClick={onClickHandler2}>
            Sub Me
          </button>
          <button className="btn btn-primary" onClick={onClickHandler3}>
            Reset Me
          </button>
        </div>
      </div>
      <div>
        <form className="flex gap-2 mt-5" onSubmit={handleSubmitBtn}>
          <input
            className="input input-primary"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter"
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>

      <form className="flex gap-2 mt-5">
        <input
          className="input input-primary"
          type="text"
          ref={btnRef}
          placeholder="Enter"
        />
        <button onClick={handleBtnClick} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
