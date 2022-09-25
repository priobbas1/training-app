import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

import Navigation from "./Navigation";

function Root() {
  return (
    <>
    
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Root;
