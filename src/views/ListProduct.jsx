import { Headerhome } from "../components/ui/Headerhome";
import "../styles/listProduct.css";
import { Link } from "react-router-dom";

const imgs = require.context('../assets',true);

export const ListProduct = () => {
  return (
    <div className="listBody">
      <Headerhome />
      <div className="listContent">
        <h2>Lista de Productos</h2>
        <table className="tableContent">
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Categoria</th>
            <th>Funciones</th>
          </tr>
          <tr>
            <th>001</th>
            <th>Papas Lays</th>
            <th>1.80</th>
            <th>50</th>
            <th>Pequeño</th>
            <th>
              <button className="editButton">Editar</button>
              <button className="deleteButton">Eliminar</button>
            </th>
          </tr>
          <tr>
            <th>001</th>
            <th>Papas Lays</th>
            <th>1.80</th>
            <th>50</th>
            <th>Pequeño</th>
            <th>
              <button className="editButton">Editar</button>
              <button className="deleteButton">Eliminar</button>
            </th>
          </tr>
          <tr>
            <th>001</th>
            <th>Papas Lays</th>
            <th>1.80</th>
            <th>50</th>
            <th>Pequeño</th>
            <th>
              <button className="editButton">Editar</button>
              <button className="deleteButton">Eliminar</button>
            </th>
          </tr>
          <tr>
            <th>001</th>
            <th>Papas Lays</th>
            <th>1.80</th>
            <th>50</th>
            <th>Pequeño</th>
            <th>
              <button className="editButton">Editar</button>
              <button className="deleteButton">Eliminar</button>
            </th>
          </tr>
          <tr>
            <th>001</th>
            <th>Papas Lays</th>
            <th>1.80</th>
            <th>50</th>
            <th>Pequeño</th>
            <th>
              <button className="editButton">Editar</button>
              <button className="deleteButton">Eliminar</button>
            </th>
          </tr>
          <tr>
            <th>001</th>
            <th>Papas Lays</th>
            <th>1.80</th>
            <th>50</th>
            <th>Pequeño</th>
            <th>
              <button className="editButton">Editar</button>
              <button className="deleteButton">Eliminar</button>
            </th>
          </tr>
          <tr>
            <th>001</th>
            <th>Papas Lays</th>
            <th>1.80</th>
            <th>50</th>
            <th>Pequeño</th>
            <th>
              <button className="editButton">Editar</button>
              <button className="deleteButton">Eliminar</button>
            </th>
          </tr>
        </table>
      </div>
      <div className="wrapper">
        <div className="info">
          <div className="sec1">
            <img src={imgs('./PepsiCo.png')} alt="img" />
            <p className="link">
              Una de nuestras alianzas mas importantes es con la empresa PepsiCo
              con la cual llevamos trabajando mas de 50 años. 
              <br/><br/>
              <a target="_blank" href="https://www.pepsico.es/sobre-nosotros/misi%C3%B3n-y-visi%C3%B3n">
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
      </div>
    </div>
  );
};
