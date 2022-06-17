import React from "react";
import "./Show.css";

export default function Show(props) {
  console.log(props.show.performance[0].artist.displayName);

  const divStyle = {
    width: "18em",
  };
  return (
    <div className="card" style={divStyle}>
      <div className="card-header">Featured</div>
      <ul className="list-group list-group-flush">
        <li class="list-group-item">
          {" "}
          {props.show.performance[0].artist.displayName}
        </li>
        <li className="list-group-item">
          {props.show.performance[1]
            ? props.show.performance[1].artist.displayName
            : null}
        </li>
        <li className="list-group-item">{props.show.venue.displayName}</li>
      </ul>
    </div>
  );
}
