import { Link } from "react-router-dom";

function Logout() {
  localStorage.removeItem("token");
  return (
    <>
      <h1>saludos desde logout</h1>;
      <Link to={"/"}>Go to Home</Link>
    </>
  );
}

export { Logout };