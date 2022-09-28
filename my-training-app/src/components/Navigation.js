import { Link } from "react-router-dom";
import "../components/hojas-stilos/Navigation.css";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/exercise" className="nav-link">
            Exercise
          </Link>
        </li>
        <li>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/workouts" className="nav-link">
            Workouts
          </Link>
        </li>

        <li>
          <Link to="/logout" className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
