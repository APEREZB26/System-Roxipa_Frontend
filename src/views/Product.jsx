import { useEffect, useState } from "react";
import axios from "axios";
import { HeaderClient } from "../components/ui/HeaderClient";
import "../styles/product.css";

const imgs = require.context("../assets", true);

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const url = "http://localhost:3000/api/product/get-products";
      const result = await axios.get(url);

      setProducts(result.data.products);
    };
    getProducts();
  }, []);

  return (
    <div className="product_Body">
      <HeaderClient />
      <div className="sliderp">
        <div className="slider-title">Categorías:</div>
        <div className="slider-content">
          <li>
            <div className="slider-subtitle">Pequeño</div>
            <img src={imgs("./background.jpg")} alt="img" />
            Pequeño
          </li>
          <li>
            <div className="slider-subtitle">Pequeño</div>
            <img src={imgs("./background.jpg")} alt="img" />
          </li>
          <li>
            <div className="slider-subtitle">Pequeño</div>
            <img src={imgs("./background.jpg")} alt="img" />
          </li>
          <li>
            <div className="slider-subtitle">Pequeño</div>
            <img src={imgs("./background.jpg")} alt="img" />
          </li>
        </div>
      </div>

      <div className="content-circle">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="category">
        <div className="slider-title">Pequeño:</div>
        <div className="category-content">
          {products.map((product) => {
            return (
              <li key={product.id}>
                <img src={product?.url} alt="img" />
                <div className="category-subtitle">{product.name}</div>
                <div className="category-subtitle"><strong>Precio:</strong> {product.price}</div>
              </li>
            );
          })}
        </div>
      </div>
      <div className="wrapperp">
        <div className="inform">
          <div className="inform-content1">
            <img src={imgs("./PepsiCo.png")} alt="img" />
            <p>
              Una de nuestras alianzas más importantes es con la empresa PepsiCo
              con la cual llevamos trabajando más de 50 años.
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
