import "../../styles/message.css";
import { Link } from "react-router-dom";
export const Message = () => {
  return (
    <div className="messageBox">
      <div className="messageContent">
        <div className="messageTitle">
          <h1>Aún no estas registrado?</h1>
        </div>
        <p>Inicia sesión o crea una cuenta para trabajar con nosotros🤞</p>
        <div className="messageButtons">
            <Link to="/auth/login">
              <button>Iniciar Sesión</button>
            </Link>
            <Link to="/auth/register">
              <button>Registrarse</button>
            </Link>
        </div>
      </div>
    </div>
  );
};
