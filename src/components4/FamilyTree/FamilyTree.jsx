import React, { createContext, useState } from "react";
import "./FamilyTree.css";
import Dad from "./Dad";
import Mom from "./Mom";
import Grandpa from "./Grandpa";

 export const AssetContext = createContext('')
 export const MoneyContext = createContext(0)

const FamilyTree = () => {
  const asset = 'diamond';
  const newAsset = 'gold'
  const [money, setMoney] = useState(0);
  return (
    <div className="family-tree">
      <h1 style={{textAlign: 'center'}}>Family Tree</h1>
      <p>Total Family Money : {money}</p>
      <section >
        <MoneyContext value={[money, setMoney]}>
          <AssetContext.Provider value={newAsset}>
              <Grandpa asset={asset} />
          </AssetContext.Provider>
        </MoneyContext>
      </section>
    </div>
  );
};

export default FamilyTree;
