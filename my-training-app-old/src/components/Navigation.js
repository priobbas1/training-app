import { Link } from "react-router-dom";
import '../components/hojas-stilos/Navigation.css';
import  logo  from '../components/assets/images/logo.png';
function Navigation() {
  return (
    <nav>
      
      <ul className="home">
      <img src={logo} alt="logo" className="logo" />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/workouts">Workouts</Link>
        </li>

        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;