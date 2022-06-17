import axios from "axios";
import React, { useEffect, useState } from "react";
import Show from "./Show";

export default function ShowSearch(props) {
  console.log(props);
  const [eventsList, setEventsList] = useState([]);

  let apiKey = "9xQ693M4hEMA4PNc";
  let city = props.city.city;
  let apiUrl = `https://api.songkick.com/api/3.0/search/locations.json?query=${city}&apikey=${apiKey}`;

  useEffect(() => {
    axios.get(apiUrl).then(handleSongkickApi);
  }, [props.city.city]);

  function handleShowsSearch(response) {
    console.log(response.data.resultsPage.results.event);
    setEventsList(response.data.resultsPage.results.event);
  }

  function cityShowsSearch(city) {
    let apiKey = "9xQ693M4hEMA4PNc";
    let apiUrl = `https://api.songkick.com/api/3.0/metro_areas/${city}/calendar.json?apikey=${apiKey}`;
    axios.get(apiUrl).then(handleShowsSearch);
  }

  function handleSongkickApi(response) {
    let json = JSON.parse(response.request.response);
    const city = json.resultsPage.results.location[0].metroArea.id;
    cityShowsSearch(city);
  }
  const events = eventsList.map((event, index) => {
    if (index < 4)
      return (
        <div className="row">
          <span className="col-3" key={index}>
            <Show show={event} />
          </span>
        </div>
      );
  });
  return <div>{events.length > 0 ? events : null}</div>;
}
