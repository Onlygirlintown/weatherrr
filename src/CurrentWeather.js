import React from "react";
import FormattedDate from "./FormattedDate";
export default function CurrentWeather(props) {
  return (
    <div className="row">
      <div className="col-6 currentWeatherDiv">
        <span className="weatherIcon">
          <img src={props.data.iconUrl} alt="weather-pic" />
        </span>
        <span className="tempSpan">
          {Math.round(props.data.temperature)}{" "}
          <span className="unitSpan">F</span>
        </span>
        <h1>{props.data.city}</h1>
      </div>
      <div className="col-6 currentWeatherDiv">
        <div className="currentWeatherInfo">
          <p>
            <FormattedDate date={props.data.date} />
          </p>{" "}
          Wind: {Math.round(props.data.wind)} mph
        </div>
        <p className="currentWeatherInfo text-capitalize">
          {" "}
          Skies: {props.data.description}
        </p>
        <p className="currentWeatherInfo"> Humidity: {props.data.humidity}%</p>
        <p className="currentWeatherInfo"> </p>
      </div>
    </div>
  );
}
