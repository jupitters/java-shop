import { createContext, useState } from "react";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState("")

  const login = (token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
  };

  const fetchUser = async (token) => {
    let userId = "";
    try{
      if(token) {
        const decoded = jwtDecode(token);
        userId = decoded.id;
      }

      const { data } = await axios.get(`http://localhost:9191/api/v1/users/user/${userId}`);
      setUser(data.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AppContext.Provider value={{ isAuthenticated, login, logout,fetchUser, user }}>
      {children}
    </AppContext.Provider>
  );
};
