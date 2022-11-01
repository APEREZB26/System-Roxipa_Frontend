import "../../css/regForm.css";
import { Header } from "../header/Header";
export const RegForm = () => {
  return (
    <div>
      <Header />
      <div className="bodyReg">
        <div className="formBox">
          <div className="formTitle">
            <p>Registro</p>
          </div>
          <div className="formContent">
            <form method="POST">
              Nombre
              <input type="text"/>
              Apellido
              <input type="text"/>
              Teléfono
              <input type="text"/>
              DNI
              <input type="text"/>
              Dirección
              <input type="text"/>
              Contraseña
              <input type="password"/>
              <input type="submit" value="Registrar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
