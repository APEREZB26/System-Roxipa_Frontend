import { Link } from "react-router-dom";
import "../../styles/auth.css";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const infoDataLogin = {
  email:"",
  password:"",
}

export const Login = () => {
  const navigate  = useNavigate();
  const [dataLogin, setDataLogin] = useState(infoDataLogin);
  const { login } = useAuth();

  const onLogin = async(e)=>{
    e.preventDefault()
    const {hasError, client} = await login(dataLogin)
    console.log(dataLogin)

    if(hasError){
      return 
    }

    if(client.user.role === "Client"){
        navigate("/homepage")
    }else{
      navigate("/admin/listProduct")
    }
  }

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
              <input type="text" id="usuario" onChange={(e)=>{
                  setDataLogin({...dataLogin , email: e.target.value})
              }}/>
              Contraseña
              <input type="password"  id="contraseña" onChange={(e)=>{
                setDataLogin({...dataLogin , password: e.target.value})
              }}/>
              <input type="submit" value="Iniciar sesión" />
              <div>
                <p>
                  ¿No tienes cuenta?
                  <Link to="/auth/register"> Únete</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
