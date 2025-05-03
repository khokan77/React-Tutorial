import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("I am In from HOme layout");

    return () => {
      console.log("I am out  from  from home layout");
    };
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default Home;
