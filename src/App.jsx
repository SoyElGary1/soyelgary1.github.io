import "./App.css";
import { ReactDOM } from "react-dom";
import ReactPlayer from "react-player";
import Card from "./components/Card.jsx";
import ImagenesGatos from "./components/ImagenesGatos.jsx";
const iconoNav = "./assets/IconCum.svg";
const mery = "./images/mery.jpg";
const pika = "./images/balon.png";
const gary = "./images/garyfloppa.jpg";
const dani = "./images/dani.png";
const decro = "./images/decro.png";
const verac = "./images/verac.png";
const santi = "./images/santi.jpg";
const ofefa = "./images/ofefa.png"


const mensajes = {
  mery: {
    nombre: "Merylu",
    mensaje:
      "Querida chiomchii, hoy es un día muy especialito tanto para ti como para mi, porque un día como hoy nació la bomnita Chiochii una personita que en poco tiempo se ha convertido en una de las mejores personita que la vida me ha permitido conocer, quiero que sepas que yo te quiero realmente muchísimo y que puedes contar conmigo para todo, estaré siempre para ti, espero que este cumpleañitos sea distinto para ti, que sea especialito, porque la querida chiochii se merece lo mejorcito. TE ADORO CHIOMCHII, espero sigas cumpliendo muchísimos años más, se despide la Mery Lu Ñiau~",
  },
  pika: {
    nombre: "Pika",
    mensaje:
      'Ay no se como empezar así que empezaré por el principio JAJA pucha chiochi en serio me caí así la raja wn :c desde que te conocí yo dije "na es entera tela hermano me cae de 10" y no me equivoque uwu eres súper buena onda, buena persona, super inteligente o como diría yo eri vía pa la wea JAJA no pero en serio eres una persona que quiero mucho y valoro su amistad uwu aunque sea de literal kilómetros uwu te quiero caleta Chío y pucha ya se me jue el hilo así que te deseo un feliz CUM así como esos que me gustan a mí 😈 pásalo super bien que te regaloneen arto y que cumplas mutos más y recuerda ante cualquier adversidad y obstáculo en tu vida solo tienes que decir estas simples palabras... Meo poto Yayita PLOP! XD eso mi chio besitos besitos chao chao YEII!',
  },
  gary: {
    nombre: "Gary",
    mensaje:
      "Mi amor, eres la persona más importante en mi vida. Eres lo mejor que me ha pasado y estoy muy agradecido de que formes parte de mi día a día. Estos 11 (NOOOOOOOOOOOO NO LO DIGASSSS) meses han sido los mejores de mi vida. De verdad que conocerte cambió mucho mi vida, y para bien. Te amo demasiado, eres mi gatita regalona. Espero que este regalito te haya gustado y que sea un lindo día 😻❤️. ",
  },
  dani: {
    nombre: "Dani",
    mensaje:
      "Estimada señorita Chiochii Muy felices 21 añitos para tí, que disfrutes mucho tu día, compartiendo con las personitas que más quieres/amas y comas muchas cositas ricas <3 Eres una personita muy hermosa y agradable, tod@s l@s que estamos a tu alrededor, amistades somos muy afortunados de tenerte con nosotros, porque brillas mucho. Espero que podamos volvernos más cercanas, sigamos compartiendo en más jueguitos y formar una linda amistad. Aunque ya te considero una amiga, te tengo mucho cariño. Recuerda que eres una reina, así que a devoraar. Te quiero mucho Chiochii❤️",
  },
  decro: {
    nombre: "Decro",
    mensaje: ``,
  },
  santi: {
    mensaje:
      "Hola Chiochi, puede que no hablemos hace rato o no muy seguido, pero quería recordarte que eres alguien super especial y a tener en cuenta al momento de tenerte en frente, te deseo lo mejor, tu amigo santi 🤍",
    nombre: "Santi",
  },
  verac:{
    nombre: "Verac",
    mensaje: "Sabias qué hay una chio que está enamorada del gary? Y que la queremos muchooooo y que está de cumpleaños?, y que le deseamos lo mejor del wolrd porque amigaaaaaaa eres lo mejor del world, te quero mucho 🎶chio Alvarado🎶 y gracias por haber estado ahí uwu y perdón por no estar siempre activo (sáquenme de este suplicio llamado universidad) pero espero que la pases súper bien en tu cumple uwu y le mando un abacho Mu grande y que sean muchos añikos más uwu TKM"
  },
  ofefa:{
    nombre: "Ofefa", 
    mensaje: "chio preciosa !!! feliz cumpleaños >< ya son 21 añitos, te deseo lo mejor este día y siempre pq te mereces eso y mxo másss 💗 ya son más de 12 años conociéndonos y de vd te considero una amiga la raja 💗 si viviésemos cerca estoy segura que ya hubiésemos salido aún más jeje, desde chiquita eres atenta y suave con tus amigues, eso te hace una persona muy bella 💗 espero que la pases estupendo y vernos en guanaqueros o en cualquier lugar para darte tu regalo y ponernos al día !!! disfruta muchísimo y tqm !!!"
  }
};

const video = "https://youtu.be/kMTNgzaSME0";
function App() {
  return (
    <>
      <nav className="navbar-container">
        <nav className="navbar">
          <img src={iconoNav} alt="gatito cumpleañero" />
          <a href="#tarjetas"> Tarjetitas</a>
          <a href="#gift">Regalito</a>
          <a href="#cat">Gatitos</a>
        </nav>
      </nav>
      
      <div className="flex-container" id="tarjetas">
        <Card
          mensaje={mensajes.mery.mensaje}
          nombre={mensajes.mery.nombre}
          idTarjeta={"mery"}
          urlImagen={mery}
          backColor={"#ffff"}
          frontColor={"#FF5733"}
        />
        <Card
          mensaje={mensajes.pika.mensaje}
          nombre={mensajes.pika.nombre}
          idTarjeta={"pika"}
          urlImagen={pika}
          backColor={"#ffff"}
          frontColor={"#FF5733"}
        />
        <Card
          mensaje={mensajes.gary.mensaje}
          nombre={mensajes.gary.nombre}
          idTarjeta={"gary"}
          urlImagen={gary}
          backColor={"#ffff"}
          frontColor={"#FF5733"}
        />
        <Card
          mensaje={mensajes.dani.mensaje}
          nombre={mensajes.dani.nombre}
          idTarjeta={"dani"}
          urlImagen={dani}
          backColor={"#"}
          frontColor={"#33F9FF"}
        />
        <Card
          mensaje={
            <p>
              Chio estás realmente grande, ya puedo decir con absoluta certeza
              que te has convertido en toda una niñita mujer. Te deseo desde el
              fondo de mi tetita izquierda un feliz cumpleaños ❤️ espero que
              este año esté lleno de nuevos desafíos muy difíciles para que tu
              vida se haga más interesante y que te lleve hacia el borde de la
              locura pero sin realmente llegar a ese punto, que sea sólo un
              acercamiento muy silly a ello para que tengas un desarrollo de
              personaje pero sin llegar a tomar medicamentos psiquiátricos :3.
              Aparte de lo dicho anteriormente en este escrito, quisiera además
              desear que este día esté lleno de cariño, de afecto de tus amigos
              y de tu familia, y por supuesto, qué mejor manera que la
              demostración de amor por medio de los bienes materiales: pídele
              una foca a tu papá, y a tu mamá una nintendo switch; es tu
              cumpleaños! Si es necesario hipotecar la casa para lograrlo,
              háganlo, eso no es lo que importa, lo único relevante es que sólo
              cumples 21 años una vez en la vida, y la celebración sólo dura un
              día. Igualmente, aunque soy consciente de que no disfrutas mucho
              de beber alcohol, esta es una oportunidad única para adoptar una
              conducta autodestructiva mientras dure la celebración de este
              evento: compra ron, pisco, whisky, lo que sea! pero por favor,
              bebe aunque no quieras, haz un esfuerzo y si es posible, vomita en
              la torta y pinta toda la casa 😉Con mucho cariño, para el pueblito
              de Ovalle, un saludo muy afectuoso y
              <a
                href="https://www.youtube.com/watch?v=oDJ4ct59NC4"
                target="_blank"
              >
                feliz cumpleaños
              </a>
              a la chio, prrñau :3
            </p>
          }
          nombre={mensajes.decro.nombre}
          idTarjeta={"decro"}
          urlImagen={decro}
          backColor={"#ffff"}
          frontColor={"#FF5733"}
        />
        <Card
          mensaje={mensajes.santi.mensaje}
          nombre={mensajes.santi.nombre}
          urlImagen={santi}
          backColor={"#ffff"}
          frontColor={"#FF5733"}
        />
        <Card
          mensaje={mensajes.ofefa.mensaje}
          nombre={mensajes.ofefa.nombre}
          idTarjeta={"ofefa"}
          urlImagen={ofefa}
          backColor={"#ffff"}
          frontColor={"#FF5733"}
        />
        <Card
          mensaje={mensajes.verac.mensaje}
          nombre={mensajes.verac.nombre}
          idTarjeta={"verac"}
          urlImagen={verac}
          backColor={"#ffff"}
          frontColor={"#FF5733"}
        />
      </div>
      <div className="react-player-container" id="gift">
          <ReactPlayer
            url={video}
            controls
            
            width={725}
            height={480}
          />
      </div>
      
      <div className="gatos-container" id="cat">
        <ImagenesGatos/>
      </div>
      
    </>
  );
}

export default App;
