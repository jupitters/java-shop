import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const apiUrl = "http://localhost:9191/api/v1"
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState("")
  const [products, setProducts] = useState([])

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

      const { data } = await axios.get(`${apiUrl}/users/user/${userId}`);
      setUser(data.data);
    } catch (error) {
      console.log(error)
    }
  }

  const fetchProducts = async () => {
    setLoading(true)
      try{
        const { data } = await axios.get(`${apiUrl}/products/all`);
        if (data.data) {
          setProducts(data.data)
        }
      } catch (error) {
        console.log(error);
      }
    setLoading(false)
  }

  const addToCart = async (id, token) => {
    try{
      await axios.post(`${apiUrl}/cartItems/item/add?itemId=${id}&quantity=1`, null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <AppContext.Provider value={{ isAuthenticated, login, logout,fetchUser, user, products, loading, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};
