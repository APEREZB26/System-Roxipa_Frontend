import "../../styles/header_home.css";
import { Link } from "react-router-dom";
import menu from "../../assets/icon-menu.svg";

export const Headerhome = () => {
  return (
    <header className="header">
      <div className="content-header">
        <div className="logo">
          <img src={menu} alt="fritolay"/>
        </div>
        <ul>
            <li>Home</li>
            <li>Productos</li>
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