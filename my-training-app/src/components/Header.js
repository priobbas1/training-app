import Navigation from "./Navigation";
import logo from "../components/assets/images/logo.png";
import fondo from "../components/assets/images/fondo.jpg";
import "../../src/components/hojas-stilos/Header.css";
export function Header() {
  return (
    <>
      <header>
        <section className="home">
          <img src={logo} alt="logo" className="logo" />
          

          <Navigation></Navigation>
        </section>
        <img src={fondo} alt="fondo" className="fondo" />
            <p>No encajes.¡Rompe el molde!</p>
         
        
      </header>
        
       
    </>
  );
}
