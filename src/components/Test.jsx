import { useEffect, useState } from "react";

export function Test() {
  const [state1, setState1] = useState(0);
  //   setState1((state1) => state1 + 1);

  useEffect(() => {
    console.log(state1);
  }, [state1]);

  //   console.log("State1: ", state1);

  const handleState = () => {
    setState1(state1 + 1);
    // setState1(state1 + 1);
    // setState1(state1 + 1);

    // setState1((state1) => state1 + 1);
    // setState1((state1) => state1 + 1);
    // setState1((state1) => state1 + 1);
  };

  return (
    <div className="text-center">
      <h1>Test</h1>
      <h2>{state1}</h2>
      <button onClick={handleState}>Add</button>
    </div>
  );
}
