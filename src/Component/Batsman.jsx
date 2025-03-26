import { useState } from "react";
import "../app.css";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSixes = () => {
    setRuns(runs + 6);
    setSixes(sixes + 1);
  };

  return (
    <div className="card">
      {runs >= 50 ? "Good Score" : "Bad Score"}
      <p>Sixes : {sixes}</p>
      <p>
        <small>Runs : {runs}</small>
      </p>
      <button onClick={() => setRuns(runs + 1)}>Single</button>
      <button onClick={() => setRuns(runs + 4)}>Four</button>
      <button onClick={handleSixes}>Six</button>
    </div>
  );
}
