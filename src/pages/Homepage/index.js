import React from "react";
import { Countries } from "../../components/Countries";
import Infor from "components/Info";
import GlobalModal from "components/common/GlobalModal";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="Home">
      <Infor />
      <Countries />
      <GlobalModal />
    </div>
  );
};

export default HomePage;
