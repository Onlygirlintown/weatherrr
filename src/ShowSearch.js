import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ShowSearch(props) {
  const [eventsList, setEventsList] = useState([]);

  let apiKey = "9xQ693M4hEMA4PNc";
  let city = props.city;
  let apiUrl = `https://api.songkick.com/api/3.0/search/locations.json?query=${city}&apikey=${apiKey}`;

  useEffect(() => {
    axios.get(apiUrl).then(handleSongkickApi);
  }, []);
  console.log("showsearch");
  function handleShowsSearch(response) {
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
    console.log("songlist");
  }
  const events = eventsList.map((event, index) => {
    if (index < 4) return <div key={index}>{event.displayName}</div>;
  });
  return <div>{events.length > 0 ? events : null}</div>;
}
