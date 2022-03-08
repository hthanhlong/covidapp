import React from "react";
import "./style.scss";
import { numberCommas } from "../../../utils";
import { useDispatch } from "react-redux";
import { fetchDetailCountry, fetchDetailDataDaily } from "Slice/ModalSlice";

const Country = function ({
  order,
  country,
  newConfirmed,
  totalConfirmed,
  totalDeaths,
  countryCode,
  slug,
}) {
  const dispatch = useDispatch();

  const handleDetailCountry = (CountryCode, slug) => {
    if (CountryCode && slug) {
      dispatch(fetchDetailCountry(CountryCode));
      dispatch(fetchDetailDataDaily(slug));
    }
  };

  return (
    <div
      onClick={() => handleDetailCountry(countryCode, slug)}
      className="country"
    >
      <div className="country-title">
        {order}.{country}
      </div>
      <div className="country-content">
        <div>
          New confirmed: {(newConfirmed && numberCommas(newConfirmed)) || 0}
        </div>
        <div>
          Total confirmed:{" "}
          {(totalConfirmed && numberCommas(totalConfirmed)) || 0}
        </div>
        <div>
          Total deaths: {(totalDeaths && numberCommas(totalDeaths)) || 0}
        </div>
      </div>
    </div>
  );
};

export default Country;
