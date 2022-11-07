import "../../styles/header.css";
import home from "../../assets/home.png";

export const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={home} alt="fritolay" />
        <p>HOME</p>
      </div>
    </header>
  );
};
