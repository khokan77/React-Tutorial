import React from "react";
import Dad from "./Dad";
import Mom from "./Mom";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = () => {
  return (
    <div>
      <h2>Grandpa</h2>
      <Dad />
      <Uncle />
      <Aunt />
    </div>
  );
};

export default Grandpa;
