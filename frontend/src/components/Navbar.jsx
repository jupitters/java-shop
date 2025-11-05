import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const { logout } = useContext(AppContext);
  const token = localStorage.getItem("token");
  let isAdmin = false;

  if (token) {
    try{
      const decoded = jwtDecode(token);
      isAdmin = decoded.roles && decoded.roles.includes("ROLE_ADMIN");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav style={{display: "flex", gap: "1rem", padding: "20px", justifyContent: "space-between"}}>
        <div style={{display: "flex", gap: "1rem"}}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/profile">Profile</NavLink>

          {isAdmin && <NavLink to="/add-product">Add Product</NavLink>}
        </div>
        <div>
          <Button variant="secondary" onClick={logout}>
            Sair
          </Button>
        </div>
        
    </nav>
  )
}

export default Navbar