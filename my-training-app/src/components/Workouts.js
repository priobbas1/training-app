import { Link } from "react-router-dom";

function Workouts() {
  return (
    <>
      <h1>SALUDO DESDE EL WORKOUTS</h1>
      <span>
        <Link to={"/"}>Go to Home</Link>
      </span>
    </>
  );
}

export default Workouts;
