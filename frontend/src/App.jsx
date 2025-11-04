import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

function App() {
  // Aqui você poderia pegar o token do localStorage, por exemplo:
  // const isAuthenticated = !!localStorage.getItem("token");
  const isAuthenticated = true; // só para exemplo

  return (
    <>
      {/* Navbar só aparece se o usuário estiver autenticado */}
      {isAuthenticated && <Navbar />}

      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas protegidas */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
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
