import React, { use } from 'react';
import Country from '../Country/Country';
import '../Countries/Countries.css'

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise)
    return (
        <div >
            <h4>Countries: {countries.length}</h4>
            <div className='Countries'>
                {
                    countries.map(country => <Country key={country.ccn3} country = {country} ></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;