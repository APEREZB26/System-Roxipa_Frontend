import { Link } from "react-router-dom";
import "../../styles/auth.css";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  //eslint-disable-next-line
  const navigate  = useNavigate();
  const [dataUser, setDataUser] = useState([]);
  const { login } = useAuth();

  const onLogin = async (e) => {
    const user = await login(dataUser);
    const userName = document.querySelector(
      "#root > div > div > div > div > div.formContent > form > input[type=text]:nth-child(1)"
    );

    userName.addEventListener("change", (e) => {
      const result = user.find((usuario) => usuario.user.email === e.target.value);

      console.log(result)

      if (!result) {
        return console.log("error")
      } else {
        try {
          if (user && result.user.role === "Client") {
            console.log('HOME client')
            navigate("/homepage")
          }
        } catch (error) {
          navigate("/admin/listProduct")
        }
      }
    });
  };

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
            <form onSubmit={onLogin}>
              Nombre / DNI
              <input type="text" />
              Contraseña
              <input type="password" />
              <input type="submit" value="Iniciar sesión" />
              <div>
                <p>
                  ¿No tienes cuenta? <button type="button" onClick={onLogin}> probar</button>
                  {/*<Link to="/auth/register"> Únete</Link>*/}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
