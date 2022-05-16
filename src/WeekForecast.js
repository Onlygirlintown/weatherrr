import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import axios from "axios";
import ForecastDaily from "./ForecastDaily";

export default function WeekForecast(props) {
  console.log(props);
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function showForecastWeek(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <span className=" weekForecastDiv">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="forecastContainer" key={index}>
                <ForecastDaily data={dailyForecast} />
              </div>
            );
          }
        })}
      </span>
    );
  } else {
    let apiKey = "ff603b4615415a7ed5f7b26e07b59db6";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showForecastWeek);

    return null;
  }
}
