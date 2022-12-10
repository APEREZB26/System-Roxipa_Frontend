import { dataUser } from "../store/storeUser";
import { useAtom } from "jotai";
import axios from "axios";

export const useAuth = () => {
  const [user, setUser] = useAtom(dataUser);

  const login = async () => {
    try {
      const url = "http://localhost:3000/api/client/get-clients";
      const result = await axios.get(url);

      setUser(result.data.clients);
      return result.data.clients;
    } catch (error) {
      return { ok: false, msg: "error" };
    }
  };

  return { login };
};
