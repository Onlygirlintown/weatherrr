import axios from "axios";
import React, { useEffect, useState } from "react";
import Events from "./Events";

export default function ShowSearch(props) {
  console.log(props.city);

  const [cityId, setCityId] = useState("");
  const [eventsList, setEventsList] = useState("");

  function handleShowsSearch(response) {
    setEventsList(response.data.resultsPage.results.event);
  }

  function cityShowsSearch() {
    let apiKey = "9xQ693M4hEMA4PNc";
    let city = cityId;
    console.log(city);
    let apiUrl = `https://api.songkick.com/api/3.0/metro_areas/${city}/calendar.json?apikey=${apiKey}`;
    axios.get(apiUrl).then(handleShowsSearch);
  }

  function handleSongkickApi(response) {
    let json = JSON.parse(response.request.response);
    setCityId(json.resultsPage.results.location[0].metroArea.id);
    cityShowsSearch();
  }

  useEffect(() => {
    let apiKey = "9xQ693M4hEMA4PNc";
    let city = props.city;
    let apiUrl = `https://api.songkick.com/api/3.0/search/locations.json?query=${city}&apikey=${apiKey}`;

    axios.get(apiUrl).then(handleSongkickApi);
  }, [props]);

  return (
    <div>
      <Events events={eventsList} />
    </div>
  );
}
