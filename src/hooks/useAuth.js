import { dataUser } from "../store/storeUser";
import { useAtom } from "jotai";
import axios from "axios";

export const useAuth = () => {
  const [user, setUser] = useAtom(dataUser);

  const login = async (dataLogin) => {
    try {
      const url = "http://localhost:3000/api/auth/login";
      const result = await axios.post(url, dataLogin);
      localStorage.setItem("token", result.data.token)

      setUser(result.data.client);
      return { hasError: result.data.hasError, client: result.data.client};
    } catch (error) {
      return { hasError: error.response.data.hasError, msg: error.response.data.msg };
    }
  };

  return { login, user };
};
