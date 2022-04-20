import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import WeekForecast from "./WeekForecast";

export default function CurrentWeather() {
  return (
    <div className="row">
      <div className="col-6 currentWeatherDiv">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="weather-pic"
        />
        <h1>68 F</h1>
        <p className="currentWeatherInfo"> 30mph</p>
        <p className="currentWeatherInfo"> Clear skies</p>
        <p className="currentWeatherInfo"> Humidity 30 %</p>
      </div>
      <WeekForecast />
    </div>
  );
}
