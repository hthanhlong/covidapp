import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { numberCommas } from "../../utils";

const InfoTemlate = {
  newCases: "New cases",
  totalCases: "Total cases",
  totalDeaths: "Total deaths",
};
const Infor = () => {
  const global = useSelector((state) => state.countries.global);

  return (
    <div className="info">
      <div className="info-header">Global</div>
      <div className="info-content">
        <div className="infoitem">
          <div className="infoitem-header">{InfoTemlate.newCases}</div>
          <div className="infoitem-number">
            {global && global.NewConfirmed && numberCommas(global.NewConfirmed)}
          </div>
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
        <div className="infoitem">
          <div className="infoitem-header">{InfoTemlate.totalCases}</div>
          <div className="infoitem-number">
            {global &&  global.TotalConfirmed && numberCommas(global.TotalConfirmed)}
          </div>
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
        <div className="infoitem">
          <div className="infoitem-header">{InfoTemlate.totalDeaths}</div>
          <div className="infoitem-number">
            {global &&  global.TotalDeaths && numberCommas(global.TotalDeaths)}
          </div>
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
      </div>
    </div>
  );
};

export default Infor;
