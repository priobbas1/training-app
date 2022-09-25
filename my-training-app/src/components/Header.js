import { Link } from "react-router-dom";
import logo from '../components/assets/images/logo.png';
import '../components/hojas-stilos/Header.css';


export const Header = () => {
    return(
        
           <section className="home">
            <img src={logo} alt="logo" className="logo" /> 
<ul>
  <li><Link to="/">Home</Link></li>
    <li> <Link to="/register">Register</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/workouts">Workouts</Link></li>
    <li><Link to="/profile">Profile</Link></li>

    </ul>

           
            <nav>
               
               
            </nav>
            
            </section>
             
    );
};
 