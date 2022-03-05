import React from "react";
import "./style.scss";

const Country = ({country}) => {
  return (
    <div className="country">
      <div className="country-title">{country}</div>
      <div className="country-content">
        <div>New confirmed: 234234</div>
        <div>Total confirmed: 234234</div>
      </div>
    </div>
  );
};

export default Country;
