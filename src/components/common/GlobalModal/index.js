import React from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "Slice/ModalSlice";
import { numberCommas } from "utils";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const GlobalModal = () => {
  const dispatch = useDispatch();

  const isShow = useSelector((state) => state.modalDetail.isShow);
  const isFetch = useSelector((state) => state.modalDetail.isFetch);
  const detailCountry = useSelector((state) => state.modalDetail.detailCountry);
  const dataDaily = useSelector((state) => state.modalDetail.dataDaily);

  const handleCloseModal = (e) => {
    dispatch(closeModal());
  };

  if (!detailCountry || isFetch || !dataDaily) return null;

  const {
    name: { common },
    flags: { png },
    population,
    region,
    subregion,
    capital,
  } = detailCountry;

  const renderLineChart = () => (
    <LineChart width={300} height={300} data={dataDaily}>
      <Line type="monotone" dataKey="Confirmed" stroke="#8884d8" />
      <XAxis dataKey=" " />
      <YAxis />
    </LineChart>
  );

  return (
    <div className={`modal ${isShow ? "modal-show" : ""}`}>
      <div className="modal-close">
        <button
          onClick={(e) => handleCloseModal(e)}
          className="modal-close-btn"
        >
          X
        </button>
      </div>
      <div className="modal-content">
        <div className="modal-content-left">
          <img className="modal-content-left-img" src={png} alt="" />
          <div>Name: {common}</div>
          <div>Capital: {capital}</div>
          <div>Population: {numberCommas(population)}</div>
          <div>Region: {region}</div>
          <div>Subregion: {subregion}</div>
        </div>
        <div className="modal-content-right">
          <div>{renderLineChart()}</div>
          <div className="modal-content-right-title">
            The chart shows trend of covid case in {common}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalModal;
