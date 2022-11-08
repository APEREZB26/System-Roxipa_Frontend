import { Headerhome } from "../components/ui/Headerhome";
import "../styles/product.css";
import lays from "../assets/lays-natural.png";
import pepsico from "../assets/PepsiCo.png";
import background from "../assets/background.jpg";

export const Product = () => {
  return (
    <div className="product_Body">
      <Headerhome/>
      <div class="sliderp">
        <div className="slider-title">
          Categorías:
        </div>
        <div className="slider-content">
          <li>
            <div className="slider-subtitle">Pequeño</div>
            <img src={background} alt="img" />
          </li>
          <li>
            <div className="slider-subtitle">Pequeño</div>
            <img src={background} alt="img" />
          </li>
          <li>
            <div className="slider-subtitle">Pequeño</div>
            <img src={background} alt="img" />
          </li>
          <li>
            <div className="slider-subtitle">Pequeño</div>
            <img src={background} alt="img" />
          </li>
        </div>
      </div>
      <div class="category">
        <div className="slider-title">
          Pequeño:
        </div>
        <div className="category-content">
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
        </div>
      </div>
      <div class="category">
        <div className="slider-title">
          Pequeño:
        </div>
        <div className="category-content">
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
        </div>
      </div>
      <div class="category">
        <div className="slider-title">
          Pequeño:
        </div>
        <div className="category-content">
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
          <li>
            <img src={lays} alt="img" />
            <div className="category-subtitle">Lays Clasica - 160g</div>
          </li>
        </div>
      </div>
      <div className="wrapperp">
        <div className="inform">
          <div className="inform-content1">
            <img src={pepsico} alt="img" />
            <p>
            Una de nuestras alianzas más importantes es con la empresa PepsiCo con la cual llevamos trabajando más de 50 años.
            </p>
          </div>
          <div className="inform-content2">
            <h2>Misión:</h2>
            <p>
              Ser un grupo líder de soluciones integrales de telecomunicaciones
              a nivel iternacional, proporcionando a nuestros clientes servicios
              de gran valor, novadores y de clase mundial, a través del
              desarrollo humano.
            </p>
          </div>
          <div className="inform-content2">
            <h2>Visión:</h2>
            <p>
              Consolidar el liderazgo de TELMEX INTERNACIONAL, expandiendo su
              penetración en los mercados donde opera para ser una de las
              empresas de más rápido y mejor crecimiento a nivel mundial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};