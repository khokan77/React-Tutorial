import React from "react";
import classic from "../../../assets/class.png";
import playground from "../../../assets/playground.png";
import swimming from "../../../assets/swimming.png";

const QZone = () => {
  return (
    <div className="bg-base-300 p-3">
      <h2 className="font-bold">QZone</h2>
      <div className="space-y-3">
        <img src={classic} alt="" />
        <img src={playground} alt="" />
        <img src={swimming} alt="" />
      </div>
    </div>
  );
};

export default QZone;
