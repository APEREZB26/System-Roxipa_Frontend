import "../../css/logForm.css";
/*import { Header } from "../header/Header";*/
export const LogForm = () => {
  return (
    <div>
      <div className="bodyLog">
        <div className="formBox">
          <div className="formTitle">
            <p>Inicio de Sesión</p>
          </div>
          <p className="title">Ingrese su dirección de correo electrónico y contraseña para acceder.</p>
          <div className="formContent">
            <form method="POST">
              Nombre / DNI
              <input type="text"/>
              Contraseña
              <input type="password"/>
              <input type="submit" value="Iniciar sesión" />
              <div>
                <p>¿No tienes cuenta?<a> Únete</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
