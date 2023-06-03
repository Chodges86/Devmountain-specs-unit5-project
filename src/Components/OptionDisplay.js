import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDisplayCountry } from "../redux/slices/displayCountrySlice";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
  const dispatch = useDispatch();
  const currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials);

  return (
    <div className="stack">
      {currentPotentials.map((value, index) => {
        return <h2 key={Math.random() * 1} onClick={() => {
          dispatch(setDisplayCountry(currentPotentials[index]))
        }}>{value.name.common}</h2>;
      })}
    </div>
  );
};

export default OptionDisplay;
