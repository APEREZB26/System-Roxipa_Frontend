import { Link } from "react-router-dom";
import "../../styles/auth.css";

export const Register = () => {
  return (
    <div>
      <div className="bodyLog">
        <div className="formBox">
          <div className="formTitle">
            <p>Únete</p>
          </div>
          <p className="title">
            Ingrese su dirección de correo electrónico y contraseña para
            acceder.
          </p>
          <div className="formContent">
            <form>
              Nombre
              <input type="text" />
              Apellido
              <input type="text" />
              Teléfono
              <input type="text" />
              DNI
              <input type="text" />
              Dirección
              <input type="text" />
              Contraseña
              <input type="password" />
              <input type="submit" value="Únete" />
              <div>
                <p>
                  ¿Ya tienes cuenta?<Link to="/auth/login"> Inicia Sesión</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
