import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

function Root() {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Root;
