import { HeaderAdmin } from "../components/ui/HeaderAdmin";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/listProduct.css";

const imgs = require.context("../assets", true);

export const ListProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const url = "http://localhost:3000/api/product/get-products";
      const result = await axios.get(url);

      setProduct(result.data.products);
    }
    getProducts();
  });

  return (
    <div className="listBody">
      <HeaderAdmin />
      <div className="listContent">
        <h2>Lista de Productos</h2>
        <table className="tableContent">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Categoria</th>
              <th>Funciones</th>
            </tr>
          </thead>
          <tbody>
            {product.map((productos) => {
              return (
                <tr>
                  <th>{productos._id}</th>
                  <th>{productos.name}</th>
                  <th>{productos.price}</th>
                  <th>{productos.stock}</th>
                  <th>{productos.category}</th>
                  <th>
                    <button className="editButton">Editar</button>
                    <button className="deleteButton">Eliminar</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="content-circle">
        <div></div>
        <div></div>
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
