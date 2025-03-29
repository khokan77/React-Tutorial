import React, { useState } from "react";
import "../Country/Country.css";

const Country = ({ country, handleClickVisited, handleFLagVisited }) => {
  const [visited, setVisited] = useState(false);
  const onClickVisited = () => {
    // visited ? setVisited(false) : setVisited(true);
    setVisited(!visited);
    handleClickVisited(country);
  };

  return (
    <div className={`card ${visited && "country-visited"}`}>
      <p>Country : {country.name.common} </p>
      <img src={country.flags.png}></img>
      <p>{country.independent ? "free" : "not free"}</p>
      <p>population: {country.population}</p>
      <button
        className={visited ? "btn-visited" : "btn-not-visited"}
        onClick={onClickVisited}
      >
        {visited ? "visited" : "not visited"}
      </button>

      <button onClick={() => handleFLagVisited(country.flags.png)}>
        Add Visited Flags
      </button>
    </div>
  );
};

export default Country;
