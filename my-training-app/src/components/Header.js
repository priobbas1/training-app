import Logo from "./assets/images/Logo.png"

import '../components/hojas-stilos/Header.css';



export const Header = () => {
    return(
        <div className="header">
             <img src={Logo} alt="" className="logo" />
             
             <ul className="header-menu">
                <li>Home</li>
                <li>Exercises</li>
                <li>Login</li>
                <li>Register</li>
        
             </ul>
            <nav>
               
               
            </nav>
            
        </div>
    );
};
