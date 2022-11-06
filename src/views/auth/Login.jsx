import { Link } from "react-router-dom";
import "../../styles/auth.css";

export const Login = () => {
  return (
    <div>
      <div className="bodyLog">
        <div className="formBox">
          <div className="formTitle">
            <p>Inicio de Sesión</p>
          </div>
          <p className="title">
            Ingrese su dirección de correo electrónico y contraseña para
            acceder.
          </p>
          <div className="formContent">
            <form>
              Nombre / DNI
              <input type="text" />
              Contraseña
              <input type="password" />
              <input type="submit" value="Iniciar sesión" />
              <div>
                <p>
                  ¿No tienes cuenta?<Link to="/auth/register"> Únete</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
