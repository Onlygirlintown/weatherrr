import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import axios from "axios";
import ForecastDaily from "./ForecastDaily";

export default function WeekForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function showForecastWeek(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="col-6 weekForecastDiv">
        <p className="forecastContainer">
          <ForecastDaily data={forecast} />
        </p>
      </div>
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
