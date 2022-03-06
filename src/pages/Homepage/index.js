import React from "react";
import { Countries } from "../../components/Countries";
import Infor from "components/Info";
// import Modal from "components/common/Modal";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="Home">
      <Infor />
      <Countries />
      {/* <Modal /> */}
    </div>
  );
};

export default HomePage;
