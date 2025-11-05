import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
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
    <nav style={{display: "flex", gap: "1rem", padding: "10px"}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/profile">Profile</NavLink>

        {isAdmin && <NavLink to="/add-product">Add Product</NavLink>}
    </nav>
  )
}

export default Navbar