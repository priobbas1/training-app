import { useContext } from "react";
import { Link } from "react-router-dom";
import "../components/hojas-stilos/Navigation.css";
import { AuthContext } from "../shared/context/authContext";

function Navigation() {
  const { logout } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        <li className="nav-element">
          <Link to="/" className="nav-link">
            <span>Home</span>
          </Link>
        </li>

        <li className="nav-element">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-element">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-element">
          <Link to="/workouts" className="nav-link">
            Workouts
          </Link>
        </li>

        <li className="nav-element">
          <Link to="/" className="nav-link" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
