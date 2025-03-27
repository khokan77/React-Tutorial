import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div className='card'>
            <p>Country : {country.name.common} </p>
            <img width={80} src={country.flags?.png}></img>
            <p>{country.independent? "free" : "not free" }</p>
        </div>
    );
};

export default Country;