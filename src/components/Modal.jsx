import React from "react";
import "../styles/Modal.scss";

const Modal = ({ url, closeModal }) => {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modalContent" onClick={closeModal}>
        <img src={url} alt="" />
        <figure>
          <img src="" alt="" />
        </figure>
      </div>
    </div>
  );
};

export { Modal };
