import React from "react";

export default function ForecastDaily(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }
  return (
    <span className="weekDay">
      <span className="weekDaySpan">{day()}</span>
      <span className="weekForecastInfo">
        <img
          className="weekDayStat"
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </span>
      <span className="weekDayStat">{maxTemperature()}</span>
      <span className="weekDayStat">{minTemperature()} Low</span>
    </span>
  );
}
