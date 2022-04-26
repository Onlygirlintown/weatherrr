import axios from "axios";
import React from "react";
import "./styles.css";

export default function SearchBar() {
  return (
    <div className="searchBarDiv">
      <input
        type="search"
        className="searchBar"
        placeholder="Type City"
      ></input>
      <button type="button" className="btn btn-primary" placeholder="📍">
        📍
      </button>
    </div>
  );
}
