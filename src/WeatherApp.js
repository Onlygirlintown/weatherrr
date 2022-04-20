import React from "react";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import CurrentWeather from "./CurrentWeather";

export default function WeatherApp() {
  return (
    <div className="container">
      <SearchBar />
      <CurrentWeather />
    </div>
  );
}
