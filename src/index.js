import React from "react";
import ReactDOM from "react-dom/client";
import WeatherApp from "./WeatherApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="mainPage">
    <div>
      <WeatherApp />
    </div>
    <footer>
      Coded by{" "}
      <a
        className="githubLink"
        href="https://github.com/Onlygirlintown/weatherrr"
      >
        Alexandra Chitacapa!!!
      </a>
    </footer>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
