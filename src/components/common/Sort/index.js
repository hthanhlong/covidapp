import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortHeighest } from "Slice/countriesSlice";
import "./style.scss";

const Sort = () => {
  const dispatch = useDispatch();
  const handleOnchangeSelect = (e) => {
    dispatch(sortHeighest(Number(e.target.value)));
  };

  return (
    <div className="sort">
      <label className="sort-label">Sort:</label>
      <select className="sort-select" onChange={(e) => handleOnchangeSelect(e)}>
        <option value="0">Default</option>
        <option value="1">
          Highest to lowest number total confirmed cases
        </option>
        <option value="2">Highest to lowest number of deaths</option>
      </select>
    </div>
  );
};

export default Sort;
