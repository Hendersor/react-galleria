import React from "react";
import "../styles/NavMobile.scss";

const Nav = ({ handleInput }) => {
  return (
    <nav className="navContainer">
      <div className="navContainer__inputContainer">
        <figure className="navContainer__figure">
          <img
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1682993765/galleria._dx4mjc.png"
            alt="logo"
          />
        </figure>

        <div className="navContainer__input">
          <input onChange={handleInput} type="text" />
        </div>
      </div>

      <div className="divider"></div>
    </nav>
  );
};

export { Nav };
