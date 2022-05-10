import React, { useState } from "react";

export default function ShowTemperature(props) {
  let [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div>
        <span className="spandegree">{Math.round(props.temp)}°</span>
        <a href="/" className="inactive">
          F
        </a>{" "}
        /
        <a href="/" className="active" onClick={showCelsius}>
          C
        </a>
      </div>
    );
  } else {
    let celsius = ((props.temp - 32) * 5) / 9;
    return (
      <div>
        <span className="spandegree">{Math.round(celsius)}°</span>
        <a href="/" className="active" onClick={showFahrenheit}>
          F
        </a>{" "}
        /
        <a href="/" className="inactive">
          C
        </a>
      </div>
    );
  }
}

/* <div className="degreeDiv"> <h2 className="currentDayDegree">{Math.round(props.temp)}°</h2>
        <span className="degreeSpan"></span>
        <span>
          <span className="unit">
            <a href="/" onClick={displayFarenheit}>
              F
            </a>
          </span>
          /
          <span>
            <a href="/">C</a>
          </span>
        </span>
      </div>
      <div className="degreeDiv">
        <h2 className="currentDayDegree">{Math.round(celsius)}°</h2>
        <span className="degreeSpan"></span>
        <span>
          <span className="unit">
            <a href="/" onClick={displayCelsius}>
              F
            </a>
          </span>
          /
          <span>
            <a href="/">C</a>
          </span>
        </span>
      </div>*/
