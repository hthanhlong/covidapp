import React, { useEffect } from "react";
import Country from "../common/Country";
import Sort from "../common/Sort";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../Slice/countriesSlice";

export const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const action = fetchCountries();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (countries && !countries.length) {
    return <div>...loading</div>;
  }

  return (
    <div className="countries">
      <div className="wrapper">
        <div className="countries-title">
          <h1>Resource covid for each country</h1>
          <Sort />
        </div>
        <div className="countries-list">
          {countries &&
            countries.map((item, index) => (
              <Country
                order={index + 1}
                key={item.ID}
                country={item.Country}
                newConfirmed={item.NewConfirmed}
                totalConfirmed={item.TotalConfirmed}
                totalDeaths={item.TotalDeaths}
                countryCode={item.CountryCode}
                slug={item.Slug}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
