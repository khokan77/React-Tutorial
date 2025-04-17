import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section>
                <Special asset={asset} />
            </section>
        </div>
    );
};

export default Myself;