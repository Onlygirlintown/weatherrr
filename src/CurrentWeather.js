import React from "react";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
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
          <h2 className="currentDayDegree">
            {Math.round(props.data.temperature)}°
          </h2>
          <span className="degreeSpan">
            <span>F</span>/<span>C</span>
          </span>
        </div>
        <h1>{props.data.city}</h1>
      </div>
      <div className="col-3 currentWeatherDiv">
        <p className="currentWeatherInfo">
          {" "}
          Wind: {Math.round(props.data.wind)} mph
        </p>
        <p className="currentWeatherInfo"> Skies: {props.data.description}</p>
        <p className="currentWeatherInfo"> Humidity: {props.data.humidity}%</p>
        <p className="currentWeatherInfo">
          {" "}
          <FormattedDate date={props.data.date} />
        </p>
      </div>
    </div>
  );
}
