import React from "react";
import "./FamilyTree.css";
import Dad from "./Dad";
import Mom from "./Mom";
import Grandpa from "./Grandpa";

const FamilyTree = () => {
  return (
    <div>
      <h1>Family Tree</h1>
      <secction class="family-tree">
        <Grandpa />
      </secction>
    </div>
  );
};

export default FamilyTree;
