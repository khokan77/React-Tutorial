import React, { use, useState } from "react";
import Country from "../Country/Country";
import "../Countries/Countries.css";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
  const [countriesvited, setCountriesVited] = useState([]);
  const [flagvisited, setFlagVisited] = useState([]);
  const handleClickVisited = (country) => {
    setCountriesVited([...countriesvited, country]);
  };

  const handleFLagVisited = (flag) => {
    setFlagVisited([...flagvisited, flag]);
  };

  return (
    <div>
      <h4>Countries: {countries.length}</h4>
      <p>Visited: {countriesvited.length}</p>
      <ol>
        {countriesvited.map((country) => (
          <li key={country.cca3}> {country.name.common}</li>
        ))}
      </ol>
      <div className="image-size">
        {flagvisited.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className="Countries">
        {countries.map((country) => (
          <Country
            handleClickVisited={handleClickVisited}
            handleFLagVisited={handleFLagVisited}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
