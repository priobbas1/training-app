import Navigation from "./Navigation";
import logo from "../components/assets/images/logo.png";

import "../../src/components/hojas-stilos/Header.css";
export function Header() {
  return (
    <>
      <header>
        <section className="home">
          <img src={logo} alt="logo" className="logo" />
          <Navigation></Navigation>
        </section>
        
        <div className="wrap">
          <div className="wrap-texto">
            <h1>BUILD YOUR BODY STRONG</h1>
            <p>Ready to change your physique,but can't work out in the gym?</p>

          </div>
        </div>
         
           
         
        
      </header>
        
       
    </>
  );
}
