import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Notes App</h2>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/previous" className="nav-link">Previous Notes</Link>
      </div>
    </nav>
  );
}