import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { jwtDecode } from "jwt-decode";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  const token = localStorage.getItem("token");
  let isAdmin = false;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      isAdmin = decoded.roles && decoded.roles.includes("ROLE_ADMIN");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isAuthenticated && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />

            {isAdmin && <Route path="/add-product" element={<AddProduct />} />}

            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          // se não estiver autenticado, redireciona tudo para login
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </>
  );
}

export default App;
