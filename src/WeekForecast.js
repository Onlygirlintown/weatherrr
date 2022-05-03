import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function WeekForecast() {
  return (
    <div className="col-6 weekForecastDiv">
      <p className="forecastContainer">
        <span className="weekDay">Monday</span>
        <span className="weekForecastInfo">
          <img
            className="weekDayStat"
            src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
            alt="weather emoji"
          />
        </span>
        <span className="weekDayStat">68 H</span>
        <span className="weekDayStat">30 Low</span>
      </p>
      <p className="forecastContainer">
        <span className="weekDay">Tuesday</span>
        <span className="weekForecastInfo">
          <img
            className="weekDayStat"
            src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
            alt="weather emoji"
          />
        </span>
        <span className="weekDayStat">68 H</span>
        <span className="weekDayStat">30 L</span>
      </p>
      <p className="forecastContainer">
        <span className="weekDay">Wednesday</span>
        <span className="weekForecastInfo">
          <img
            className="weekDayStat"
            src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
            alt="weather emoji"
          />
        </span>
        <span className="weekDayStat">68 H</span>
        <span className="weekDayStat">30 L</span>
      </p>
      <p className="forecastContainer">
        <span className="weekDay">Thursday</span>
        <span className="weekForecastInfo">
          <img
            className="weekDayStat"
            src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
            alt="weather emoji"
          />
        </span>
        <span className="weekDayStat">68 H</span>
        <span className="weekDayStat">30 L</span>
      </p>
      <p className="forecastContainer">
        <span className="weekDay">Friday</span>
        <span className="weekForecastInfo">
          <img
            className="weekDayStat"
            src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
            alt="weather emoji"
          />
        </span>
        <span className="weekDayStat">68 H</span>
        <span className="weekDayStat">30 L</span>
      </p>
    </div>
  );
}
