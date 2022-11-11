import "../../styles/header_home.css";
import { Link } from "react-router-dom";
const imgs = require.context('../../assets',true);

export const Headerhome = () => {
  return (
    <header className="header">
      <div className="content-header">
        <div className="logo">
          <img src={imgs('./icon-menu.svg')} alt="fritolay"/>
        </div>
        <ul>
            <Link to="/homepage">
            <li>Home</li>
            </Link>
            <Link to="/product">
            <li>Productos</li>
            </Link>
            <li>Carrito</li>
        </ul>
        <div className="content-profile">
          <Link to="/auth/login">
            <div className="profile">
              <p>Iniciar sesión</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};