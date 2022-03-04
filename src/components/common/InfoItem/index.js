import React from "react";
import "./style.scss";

const InforItem = ({ type }) => {
  return (
    <div className="infoitem">
      <div className="infoitem-header">{type}</div>
      <div className="infoitem-number">4538453984</div>
      <div>
        Source:{" "}
        <a
          href="https://api.covid19api.com/"
          alt=""
          target="_blank"
          rel="noreferrer"
        >
          https://api.covid19api.com/
        </a>
      </div>
    </div>
  );
};

export default InforItem;
