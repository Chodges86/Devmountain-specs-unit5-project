import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);

  return (
    <div className="stack">
      <br />
      <br />
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>
      <br />
      <h2>Capital: {currentDisplay.capital[0]}</h2>
      <br />
      <h2>Borders: </h2>
      {currentDisplay.borders.map((country) => (
        <h4 key={country}>{country}</h4>
      ))}
      <br />
      <h2>Continents:</h2>
      {currentDisplay.continents.map((cont) => (
        <h4 key={cont}>{cont}</h4>
      ))}
      <br />
      <br />
      <h2>Population:</h2>
      <h4>{currentDisplay.population}</h4>
      <br />
      <h2>Member of the UN:</h2>
      <h4>{currentDisplay.unMember ? "Yes" : "No"}</h4>
    </div>
  );
};

export default Overview;
