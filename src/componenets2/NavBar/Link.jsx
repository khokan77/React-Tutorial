import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='mx-4 lg:px-4 hover:bg-amber-500' ><a href={route.route}>{route.name}</a></li>
        </div>
    );
};

export default Link;