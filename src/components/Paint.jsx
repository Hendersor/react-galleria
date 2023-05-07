import React from "react";

const Paint = ({ urlGallery, artist, name, selectPaint }) => {
  return (
    <figure className="paint">
      <img
        id={name}
        src={urlGallery}
        alt="paintPicture"
        onClick={selectPaint}
      />
      <div className="paintInfo">
        <h1>{name}</h1>
        <h3>{artist}</h3>
      </div>
    </figure>
  );
};

export { Paint };
