import "../../styles/header.css";
import { Link } from "react-router-dom";
const imgs = require.context('../../assets',true);

export const HeaderAdmin = () => {
  return (
    <header className="header">
      <div className="content-header">
        <div className="logo">
          <img src={imgs('./icon-menu.svg')} alt="fritolay"/>
        </div>
        <ul>
            <Link to="/admin/listProduct">
            <li>Productos</li>
            </Link>
            <Link to="/admin/listClient">
            <li>Clientes</li>
            </Link>
        </ul>
        <div className="content-profile">
          <Link to="/auth/login">
            <div className="profile">
              <p>Kenneth Hernan 💪</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};