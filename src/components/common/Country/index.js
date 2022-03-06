import React from "react";
import "./style.scss";
import { numberCommas } from "../../../utils";

const Country = ({ order, country, newConfirmed, totalConfirmed, totalDeaths }) => {
  return (
    <div className="country">
      <div className="country-title">
        {order}.{country}
      </div>
      <div className="country-content">
        <div>New confirmed: {numberCommas(newConfirmed) || 0}</div>
        <div>Total confirmed: {numberCommas(totalConfirmed) || 0}</div>
        <div>Total deaths: {numberCommas(totalDeaths) || 0}</div>
      </div>
    </div>
  );
};

export default Country;
