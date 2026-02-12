import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#333", padding: "1rem", display: "flex", gap: "1rem" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/chi-siamo" style={{ color: "white", textDecoration: "none" }}>Chi Siamo</Link>
      <Link to="/prodotti" style={{ color: "white", textDecoration: "none" }}>Prodotti</Link>
    </nav>
  );
}

export default Navbar;