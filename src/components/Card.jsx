import "./Card.css";



const Card = ({mensaje, urlImagen, backColor, frontColor, nombre, idTarjeta,}) => {

  return (
    <>
    <div className="cards-grid">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ backgroundImage: `url(${urlImagen})`, backgroundColor: `${frontColor}`, }}></div>
          <div className="flip-card-back" id={idTarjeta} style={{backgroundColor: `${backColor}`}}><h3>{nombre}</h3><p>{mensaje}</p></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;

