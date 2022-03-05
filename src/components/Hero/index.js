import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const Hero = () => {
  const date = useSelector((state) => state.countries.date);
  return (
    <div className="hero">
      <div className="hero-title">
        <div>
          <h1>Resource Coronavirus</h1>
          <h3>Last updated: {date}</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
