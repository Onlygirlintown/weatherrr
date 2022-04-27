import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import WeekForecast from "./WeekForecast";
import CurrentWeather from "./CurrentWeather";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleInput(event) {
    event.preventDefault();
    searchWeather();
  }
  function handleCityInput(event) {
    setCity(event.target.value);
  }
  function searchWeather() {
    const apiKey = "ff603b4615415a7ed5f7b26e07b59db6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="searchBarDiv">
          <form onSubmit={handleInput}>
            <input
              type="search"
              className="searchBar"
              placeholder="Type City"
              onChange={handleCityInput}
            />
            <button type="button" className="btn btn-primary" placeholder="📍">
              📍
            </button>
          </form>
        </div>
        <div className="row">
          <CurrentWeather data={weatherData} />
          <WeekForecast />
        </div>
      </div>
    );
  } else {
    searchWeather();
    return "oopsie";
  }
}
