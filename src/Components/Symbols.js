import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
  const currentDisplay = useSelector(selectDisplay);

  return (
    <div className="symbols">
      <div className="stack">
        <h2>Flag of {currentDisplay.name.common}:</h2>
        <img
          src={
            currentDisplay.flags ? currentDisplay.flags.png : "No flag found"
          }
          alt="Flag of selected country"
        />
      </div>
      <div className="stack">
        <h2>Coat of Arms of {currentDisplay.name.common}:</h2>
        <img
          src={
            currentDisplay.coatOfArms
              ? currentDisplay.coatOfArms.png
              : "No Coat of Arms found"
          }
          alt="Coat of Arms for selected country"
        />
      </div>
    </div>
  );
};

export default Symbols;
