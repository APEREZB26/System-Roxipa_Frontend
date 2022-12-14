import "../../styles/header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const imgs = require.context("../../assets", true);

export const HeaderAdmin = () => {
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="content-header">
        <div className="logo">
          <img src={imgs("./icon-menu.svg")} alt="fritolay" />
        </div>
        <ul>
          <Link to="/homepage">
            <li>HomePage</li>
          </Link>
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
              <p>{user.fullname}</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
