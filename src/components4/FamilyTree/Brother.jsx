import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {

    const [money,setMoney] = use(MoneyContext)
    const handleCLick = e => {
        setMoney(money + 500)
    }
    return (
        <div>
            <h2>Brother</h2>
            <p>Money: {money}</p>
            <button className='btn' onClick={handleCLick}>Add Money 500</button>
        </div>
    );
};

export default Brother;