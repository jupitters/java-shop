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
  const isAuthenticated = true;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />

      {
        isAuthenticated ? (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </>
        ) : (
          <Route path='*' element={<Navigate to="/login" />} />
        )
      }
    </Routes>
  );
}

export default App
