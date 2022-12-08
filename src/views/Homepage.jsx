import { HeaderClient } from "../components/ui/HeaderClient";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import { Chat } from "../components/ui/chat";

const imgs = require.context("../assets", true);

export const Homepage = () => {
  return (
    <div className="homepage_Body">
      <HeaderClient />
      <div className="slider">
        <div className="previous">
          <img src={imgs("./icon-previous.svg")} alt="img" />
        </div>
        <li>
          <img src={imgs("./lays-natural.png")} alt="img" />
        </li>
        <li>
          <img src={imgs("./lays-natural.png")} alt="img" />
        </li>
        <li>
          <img src={imgs("./lays-natural.png")} alt="img" />
        </li>
        <li>
          <img src={imgs("./lays-natural.png")} alt="img" />
        </li>
        <div className="next">
          <img src={imgs("./icon-next.svg")} alt="img" />
        </div>
      </div>
      <div className="content-circle">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="wrapper">
        <div className="info">
          <div className="sec1">
            <img src={imgs("./PepsiCo.png")} alt="img" />
            <p className="link">
              Una de nuestras alianzas mas importantes es con la empresa PepsiCo
              con la cual llevamos trabajando mas de 50 años.
              <br />
              <br />
              <a
                target="_blank"
                href="https://www.pepsico.es/sobre-nosotros/misi%C3%B3n-y-visi%C3%B3n"
                rel="noreferrer"
              >
                Mas información...
              </a>
            </p>
          </div>
          <div className="sec2">
            <h2>Misión:</h2>
            <p>
              Ser un grupo líder de soluciones integrales de telecomunicaciones
              a nivel iternacional, proporcionando a nuestros clientes servicios
              de gran valor, novadores y de clase mundial, a través del
              desarrollo humano.
            </p>
            <h2>Visión:</h2>
            <p>
              Consolidar el liderazgo de TELMEX INTERNACIONAL, expandiendo su
              penetración en los mercados donde opera para ser una de las
              empresas de más rápido y mejor crecimiento a nivel mundial.
            </p>
          </div>
        </div>
        <div className="fritolay_info">
          <div>
            <img src={imgs("./Pepsico_FlaminHotLimon.jpg")} alt="imagen" />
            <p>
              Frito Lay lanza un nuevo sabor de la cadena de productos Doritos
              con sabor a Chilli.
            </p>
            <Link to="/product">Ver Más</Link>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
};
