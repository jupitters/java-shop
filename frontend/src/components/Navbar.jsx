import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={{display: "flex", gap: "1rem", padding: "10px"}}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
    </nav>
  )
}

export default Navbar