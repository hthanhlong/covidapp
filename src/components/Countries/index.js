import React from "react";
import Country from "../common/Country";
import Sort from "../common/Sort";
import "./style.scss";

export const Countries = () => {
  return (
    <div className="countries">
      <div className="wrapper">
        <div className="countries-title">
          <h1>Resource covid for each country</h1>
          <Sort />
        </div>
        <div className="countries-list">
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
        </div>
      </div>
    </div>
  );
};
