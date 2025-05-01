import React, { Suspense } from "react";
import Categories from "./categories";
import { Heading2 } from "lucide-react";

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
