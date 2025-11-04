import Button from 'react-bootstrap/Button'

const Navbar = () => {
  return (
    <div>
        <h1 className={{display: "flex", gap: "1rem", padding: "10px"}}>oi</h1>
        <Link to="/">Home</Link>
        <Link to="/cart">Home</Link>
        <Link to="/profile">Home</Link>
    </div>
  )
}

export default Navbar