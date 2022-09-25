import { Link } from "react-router-dom";



export const Header = () => {
    return(
        
           <section> 
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
 