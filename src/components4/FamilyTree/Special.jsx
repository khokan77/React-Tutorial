import React, { use, useContext } from 'react';
import { AssetContext, MoneyContext } from "./FamilyTree";

const Special = ({asset}) => {

    const newAsset = useContext(AssetContext);
    const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <h2>Special: {asset}</h2>
            <h2>New Asset: {newAsset}</h2>
            <button className='btn' onClick={()=> setMoney(money + 1000)}>Add 1000 Money</button>
        </div>
    );
};

export default Special;