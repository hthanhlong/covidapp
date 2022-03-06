import React from "react";
import "./style.scss";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-close">
        <button className="modal-close-btn">X</button>
      </div>
      <div className="modal-content">
        <div className="modal-content-left">left</div>
        <div className="modal-content-right">right</div>
      </div>
    </div>
  );
};

export default Modal;
