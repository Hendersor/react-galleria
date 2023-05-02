import React from "react";
import "../styles/Gallery.scss";

const Gallery = () => {
  return (
    <section className="paintContainer">
      <figure className="paint">
        <img
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1682998555/assets/starry-night/thumbnail_ahbbc0.jpg"
          alt="paintPicture"
        />

        <div className="paintInfo">
          <h1>Starry Night</h1>
          <h3>Vincent Van Gogh</h3>
        </div>
      </figure>

      <figure className="paint">
        <img
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1682998566/assets/lady-with-an-ermine/thumbnail_agsohq.jpg"
          alt="paintPicture"
        />

        <div className="paintInfo">
          <h1>Starry Night</h1>
          <h3>Vincent Van Gogh</h3>
        </div>
      </figure>

      <figure className="paint">
        <img
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1682998565/assets/girl-with-pearl-earring/thumbnail_cwudfy.jpg"
          alt="paintPicture"
        />

        <div className="paintInfo">
          <h1>Starry Night</h1>
          <h3>Vincent Van Gogh</h3>
        </div>
      </figure>
    </section>
  );
};

export { Gallery };
