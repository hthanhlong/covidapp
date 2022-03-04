import React from "react";
import InforItem from "../common/InfoItem";
import "./style.scss";

const InfoTemlate = [
  { id: 1, name: "New cases" },
  { id: 2, name: "Total cases" },
  { id: 3, name: "Total deaths" },
];

const Infor = () => {
  return (
    <div className="info">
      <div className="info-header">Global</div>
      <div className="info-content">
        {InfoTemlate &&
          InfoTemlate.map((item) => (
            <InforItem key={item.id} type={item.name} />
          ))}
      </div>
    </div>
  );
};

export default Infor;
