import React, { Suspense } from "react";
import Categories from "./categories";

const LeftBar = () => {
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftBar;
