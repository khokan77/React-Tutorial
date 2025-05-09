import React, { Suspense } from "react";
import NavBar from "./components2/NavBar/NavBar";
import Pricing from "./components2/Pricing/Pricing";

const pricingPromise = fetch("pricing.json").then((res) => res.json());

const App2 = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense>
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>
    </div>
  );
};

export default App2;
