import React, { useEffect, useState } from "react";
import "./ImagenesGatos.css";
const imageUrl = "https://cataas.com/cat/says/Feliz%20Cumpleaños?size=50&color=red";

const ImagenesGatos = () => {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <main className="gato-container">
        <h1 className="h1-gatos">Estos gatitos te desean feliz cumpleaños</h1>
        <img className="img-gato" src={img} style={{}} alt="icons" />
        <button className="boton" onClick={fetchImage}>Otro Gato</button>
      </main>
    </>
  );
};

export default ImagenesGatos;
