import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      const response = await api.post("/users", data);
      navigate("/");
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate("/home");
      toast.success("Login feito com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Email ou senha incorreto!");
    }
  };

  useEffect(() => {
    async function getUser() {
      const UserToken = localStorage.getItem("@TOKEN");

      if (!UserToken) {
        return navigate("/");
      }

      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${UserToken}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);

  useEffect(() => {
    const UserToken = localStorage.getItem("@TOKEN");

    if (UserToken) {
      const autoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${UserToken}`,
            },
          });
          setUser(response.data);
          navigate("/home");
        } catch (error) {
          console.log(error);
        }
      };
      autoLogin();
    }
  }, []);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
    toast.warning("Você foi deslogado!");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, registerUser, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
