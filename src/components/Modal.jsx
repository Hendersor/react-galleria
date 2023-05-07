import React from "react";
import "../styles/Modal.scss";

const Modal = ({ url, closeModal }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="overlay"></div>
      <div className="modalContent">
        <img src={url} alt="" />
        <figure>
          <img src="" alt="" />
        </figure>
      </div>
    </div>
  );
};

export { Modal };
