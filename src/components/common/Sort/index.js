import React, { useEffect } from "react";
import "./style.scss";

const Sort = () => {
  const handleOnchangeSelect = (e) => {
    console.log("first", e.target.value);
  };

  useEffect(() => {
    // handleOnchangeSelect();
  }, []);

  return (
    <div className="sort">
      <label className="sort-label">Sort:</label>
      <select className="sort-select" onChange={(e) => handleOnchangeSelect(e)}>
        <option value="">Default</option>
        <option value="1">
          Highest to lowest number total confirmed cases
        </option>
        <option value="2">Highest to lowest number of deaths</option>
      </select>
    </div>
  );
};

export default Sort;
