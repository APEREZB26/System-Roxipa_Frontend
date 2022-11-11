import { HeaderAdmin } from "../components/ui/HeaderAdmin";
import "../styles/listProduct.css";

const imgs = require.context('../assets',true);

export const ListProduct = () => {
  return (
    <div className="listBody">
      <HeaderAdmin />
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
      <div className="content-circle">
        <div></div><div></div>
      </div>
      <div className="wrapperp">
        <div className="inform">
          <div className="inform-content1">
            <img src={imgs('./PepsiCo.png')} alt="img" />
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
