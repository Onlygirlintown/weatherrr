import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import WeekForecast from "./WeekForecast";

export default function CurrentWeather() {
  return (
    <div className="row">
      <div className="col-3 currentWeatherDiv">
        <div className="weatherIcon">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-pic"
          />
        </div>
        <div className="degreeDiv">
          <h2 className="currentDayDegree">68°</h2>
          <span className="degree">F</span>/<span className="degree">C</span>
        </div>
        <h1>San Diego</h1>
      </div>
      <div className="col-3 currentWeatherDiv">
        <p className="currentWeatherInfo"> 30mph</p>
        <p className="currentWeatherInfo"> Clear skies</p>
        <p className="currentWeatherInfo"> Humidity: 30 %</p>
      </div>
      <WeekForecast />
    </div>
  );
}
