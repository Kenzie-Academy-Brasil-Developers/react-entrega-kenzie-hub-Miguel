import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Services";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const registerUser = async (data) => {
    console.log(data);

    try {
      const response = await api.post("/users", data);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  const loginUser = async (data) => {
    console.log(data);

    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      console.log(response.data.user);
      navigate("/home");
    } catch (error) {
      console.error(error);
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
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, registerUser, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
