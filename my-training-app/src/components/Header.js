import Navigation from "./Navigation";
import logo from "../components/assets/images/logo.png";
/* import "../components/hojas-stilos/Header.css"; */

function Header() {
  return (
    <>
      <header>
        <section className="home">
          <img src={logo} alt="logo" className="logo" />
          <Navigation></Navigation>
        </section>{" "}
      </header>
    </>
  );
}

export default Header;
