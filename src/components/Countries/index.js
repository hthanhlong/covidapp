import React, { useEffect } from "react";
import Country from "../common/Country";
import Sort from "../common/Sort";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../Slice/countriesSlice";

export const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  console.log("countries", countries);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const action = fetchCountries();
      dispatch(action);
    } catch (error) {
      throw Error(error);
    }
  }, []);

  return (
    <div className="countries">
      <div className="wrapper">
        <div className="countries-title">
          <h1>Resource covid for each country</h1>
          <Sort />
        </div>
        <div className="countries-list">
          {countries &&
            countries.map((item) => (
              <Country key={item.ID} country={item.Country} />
            ))}
        </div>
      </div>
    </div>
  );
};
