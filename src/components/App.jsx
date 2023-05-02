import React from "react";
import data from "../data.json";
import { Nav } from "./Nav";
import { Gallery } from "./Gallery";
import "../styles/global.scss";

const App = () => {
  console.log(data[0]);
  return (
    <main className="galleryContainer">
      <Nav />
      <Gallery />
    </main>
  );
};

export { App };
