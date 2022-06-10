import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import CurrentWeather from "./CurrentWeather";
import WeekForecast from "./WeekForecast";
import ShowSearch from "./ShowSearch";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    console.log(weatherData.coordinates);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

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
            <input type="submit" value="🔎" className="btn btn-primary" />
          </form>
        </div>
        <div className="row d-md-block">
          <div className="col-6 col-md-auto col-12">
            <div className="dayOfForecastDiv">
              <CurrentWeather data={weatherData} />
              <ShowSearch city={city} />
            </div>
          </div>
          <div
            className="col-6 col-md-auto col-12

          "
          >
            <WeekForecast coords={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    searchWeather();
    return "oopsie";
  }
}
