import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
  const display = useSelector(selectDisplay);
  const latitude = display.capitalInfo.latlng[0];
  const longitude = display.capitalInfo.latlng[1];

  const [weather, setWeather] = useState();

  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        "X-RapidAPI-Key": "044b6319a8msha994f793dfd81dap11a4acjsn232b04f44519",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <br />
        <br />
        <h2>Weather for {display.name.common}</h2>
        <h4>at: {display.capital[0]}</h4>
        <br />
        <br />
        <table>
          <tbody className="overview-table">
            <tr>
              <td>Conditions: </td>
              <td>{weather?.current?.condition?.text}</td>
            </tr>
            <tr>
              <td>Temperature: </td>
              <td>{weather?.current.temp_f}° Fahrenheit</td>
            </tr>
            <tr>
              <td>Feels Like: </td>
              <td>{weather?.current?.feelslike_f}° Fahrenheit</td>
            </tr>
            <tr>
              <td>Humidity: </td>
              <td>{weather?.current?.humidity}%</td>
            </tr>
            <tr>
              <td>Wind Speed: </td>
              <td>
                {weather?.current?.wind_mph} mph {weather?.current?.wind_dir}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Weather;
