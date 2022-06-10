import React from "react";
import Show from "./Show";

export default function Events(props) {
  return (
    <span>
      {props.events.map(function (show, index) {
        if (index < 6) {
          return (
            <div key={index}>
              <Show show={show} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </span>
  );
}
