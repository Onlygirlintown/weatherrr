import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import WeatherSearch from "./WeatherSearch";

export default function WeatherApp() {
  return (
    <div className="container">
      <WeatherSearch defaultCity="San Diego" />
    </div>
  );
}
