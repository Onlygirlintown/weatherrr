import React from "react";
import FormattedDate from "./FormattedDate";
import ShowTemperature from "./ShowTemperature";

export default function CurrentWeather(props) {
  return (
    <div className="row">
      <div className="col-3 currentWeatherDiv">
        <div className="weatherIcon">
          <img src={props.data.iconUrl} alt="weather-pic" />
        </div>
        <ShowTemperature temp={Math.round(props.data.temperature)} />
      </div>
      <h1>{props.data.city}</h1>
      <div className="col-3 currentWeatherDiv">
        <p className="currentWeatherInfo">
          <p>
            <FormattedDate date={props.data.date} />
          </p>{" "}
          Wind: {Math.round(props.data.wind)} mph
        </p>
        <p className="currentWeatherInfo"> Skies: {props.data.description}</p>
        <p className="currentWeatherInfo"> Humidity: {props.data.humidity}%</p>
        <p className="currentWeatherInfo"> </p>
      </div>
    </div>
  );
}
