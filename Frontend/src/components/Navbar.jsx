import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
        <h2>Notes App</h2>

        <div>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/previous">Previous Notes</Link>
        </div>
    </nav>
  );
}
