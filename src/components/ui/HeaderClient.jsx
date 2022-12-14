import "../../styles/header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const imgs = require.context('../../assets',true);

export const HeaderClient = () => {
  const { user } = useAuth();

  console.log(user)
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
              <p>{user.fullname}</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};