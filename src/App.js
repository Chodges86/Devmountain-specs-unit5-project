import { useSelector } from "react-redux";

import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectDisplay } from "./redux/slices/displayCountrySlice";

import { selectPotentials } from "./redux/slices/potentialCountriesSlice";

function App() {
  const currentDisplay = useSelector(selectDisplay);

  const potentials = useSelector(selectPotentials);

  return (
    <div className="App font-link">
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
