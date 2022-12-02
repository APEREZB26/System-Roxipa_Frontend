import { HeaderAdmin } from "../components/ui/HeaderAdmin";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/listProduct.css";

const imgs = require.context("../assets", true);

export const ListClient = () => {
  const [client, setClient] = useState([]);

  useEffect(()=>{
    async function getClients(){
      const url = "http://localhost:3000/api/client/get-clients";
      const result = await axios.get(url);

      setClient(result.data.clients);
    };
    getClients()
  })
    return (
      <div className="listBody">
        <HeaderAdmin />
        <div className="listContent">
          <h2>Lista de Clientes</h2>
          <table className="tableContent">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Dirección</th>
              </tr>
            </thead>
            <tbody>
              {client.map((cliente) => {
                return (
                  <tr key={cliente._id}>
                    <th>{cliente._id}</th>
                    <th>{cliente.fullname}</th>
                    <th>{cliente.phone}</th>
                    <th>{cliente.user.email}</th>
                    <th>{cliente.direction}</th>
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
                Una de nuestras alianzas más importantes es con la empresa
                PepsiCo con la cual llevamos trabajando más de 50 años.
              </p>
            </div>
            <div className="inform-content2">
              <h2>Misión:</h2>
              <p>
                Ser un grupo líder de soluciones integrales de
                telecomunicaciones a nivel iternacional, proporcionando a
                nuestros clientes servicios de gran valor, novadores y de clase
                mundial, a través del desarrollo humano.
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
