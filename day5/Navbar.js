import { Link } from "react-router-dom";
import { logout } from "../redux/auth";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/profile">Profile</Link>
    <button onClick={logout}>Logout</button>
  </nav>
);

export default Navbar;
