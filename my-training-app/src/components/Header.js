import Navigation from "./Navigation";
import logo from "../components/assets/images/logo.png";

import "../../src/components/hojas-stilos/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <section className="home">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Navigation></Navigation>
        </section>
      </header>
    </>
  );
}

export default Header;
