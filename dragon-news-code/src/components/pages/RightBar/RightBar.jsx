import React from "react";
import SocialLogin from "./SocialLogin";
import FindUsOn from "./FindUsOn";
import QZone from "./QZone";

const RightBar = () => {
  return (
    <div className="space-y-5">
      <SocialLogin />
      <FindUsOn />
      <QZone />
    </div>
  );
};

export default RightBar;
