import "../../styles/header_home.css";
import home from "../../assets/home.png";

export const Headerhome = () => {
  return (
    <header className="header">
      <div>
        <img src={home} alt="fritolay" />
        <ul>
            <li>Home</li>
            <li>Productos</li>
            <li>Carrito</li>
        </ul>
      </div>
    </header>
  );
};