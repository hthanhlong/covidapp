import React from "react";
import { Countries } from "../../components/Countries";
import Infor from "../../components/Info";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="Home">
      <Infor />
      <Countries />
    </div>
  );
};

export default HomePage;