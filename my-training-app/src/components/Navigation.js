import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/workouts">Workouts</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navigation;
