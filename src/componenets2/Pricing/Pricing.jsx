import React, { use } from 'react';

const Pricing = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    console.log(pricingData);
    return (
        <div>
            
        </div>
    );
};

export default Pricing;