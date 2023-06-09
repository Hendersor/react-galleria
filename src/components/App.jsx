import React, { useState } from "react";
import data from "../data.json";
import { Nav } from "./Nav";
import { Paint } from "./Paint";
import { Modal } from "./Modal";
import "../styles/global.scss";
import "../styles/Gallery.scss";
import "../styles/Modal.scss";

const App = () => {
  // Este es el estado para el valor de busqueda dentro del input
  const [searchPaint, setSearchPaint] = useState("");

  // Este es el estado de la data en general
  const [theData, setTheData] = useState(data);

  // Estado para la data ya filtrada
  const [paintSearched, setPaitSearched] = useState(theData);

  // Funcion que maneja el input del usuario y filtra la data
  const handleInput = (input) => {
    // El input de entrada se pasa a minuscula para una busqueda mas precisa
    const searchPaint = input.target.value.toLowerCase();
    setSearchPaint(searchPaint);

    // Filtramos la data en base al nombre de la pintura
    const filterData = theData.filter((paint) => {
      return paint.name.toLowerCase().includes(searchPaint);
    });

    // Actualizamos el estado de la data filtrada
    setPaitSearched(filterData);
  };

  // Logica para el modal
  const [modal, setModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const toggleModal = (event) => {
    console.log(event);
    const imageUrlSelected = event.target.src;
    setImageUrl(imageUrlSelected);
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <main className="galleryContainer">
      <Nav handleInput={handleInput} />
      <section className="paintContainer">
        {paintSearched.map((p, index) => (
          <Paint
            key={index}
            urlGallery={p.images.thumbnail}
            artist={p.artist.name}
            name={p.name}
            selectPaint={toggleModal}
          />
        ))}
      </section>
      {modal && <Modal url={imageUrl} closeModal={closeModal} />}
    </main>
  );
};

export { App };
