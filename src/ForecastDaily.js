import React from "react";

export default function ForecastDaily(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    return days[day];
  }
  return (
    <span className="weekDay">
      {day()}
      <span className="weekForecastInfo">
        <img
          className="weekDayStat"
          src={`http://openweathermap.org/img/wn/${props.data[0].weather[0].icon}@2x.png`}
          alt="weather emoji"
        />
      </span>
      <span className="weekDayStat">{Math.round(props.data[0].temp.max)}</span>
      <span className="weekDayStat">
        {Math.round(props.data[0].temp.min)} Low
      </span>
    </span>
  );
}
