import { Headerhome } from "../components/ui/Headerhome";
import "../styles/homepage.css";
import lays from "../assets/lays-natural.png";
import pepsico from "../assets/PepsiCo.png";
export const Homepage = () => {
  return (
    <div className="homepage_Body">
      <Headerhome/>
      <div class="slider">
        <li>
          <img src={lays} alt="img" />
        </li>
        <li>
          <img src={lays} alt="img" />
        </li>
        <li>
          <img src={lays} alt="img" />
        </li>
        <li>
          <img src={lays} alt="img" />
        </li>
        <li>
          <img src={lays} alt="img" />
        </li>
        <li>
          <img src={lays} alt="img" />
        </li>
        <li>
          <img src={lays} alt="img" />
        </li>
        <li>
          <img src={lays} alt="img" />
        </li>
      </div>
      <div className="wrapper">
        <div className="info">
          <div className="sec1">
            <img src={pepsico} alt="img" />
            <p>
              Una de nuestras alianzas mas importantes es con la empresa PepsiCo
              con la cual llevamos trabajando mas de 50 anos. Mas información...
            </p>
          </div>
          <div className="sec2">
            <h2>Mision</h2>
            <p>
              Ser un grupo líder de soluciones integrales de telecomunicaciones
              a nivel iternacional, proporcionando a nuestros clientes servicios
              de gran valor, novadores y de clase mundial, a través del
              desarrollo humano.
            </p>
            <h2>Visión</h2>
            <p>
              Consolidar el liderazgo de TELMEX INTERNACIONAL, expandiendo su
              penetración en los mercados donde opera para ser una de las
              empresas de más rápido y mejor crecimiento a nivel mundial.
            </p>
          </div>
        </div>
        <div className="fritolay_info">
          <div>
            <img src={lays} alt="imagen" />
            <p>
              Frito Lay lanza un nuevo sabor de la cadena de productos Doritos
              con sabor a Chilli.
            </p>
            <button>Ver Más</button>
          </div>
        </div>
      </div>
    </div>
  );
};
