import { Link } from "react-router-dom";
import { getWorkoutsListFav } from "../http/workouts-api";
import { Create, Search } from "../shared/icons/Icons";
import WorkoutsFav from "./WorkoutsFav";

function WorkoutMenu() {
  return (
    <section className="WorkoutMenu">
      <article className="WorkoutMenu">
        <h1 className="workouts-list">Workouts</h1>
        <ul className="workouts-list">
          <li>
            <Link to="/create">
              <button id="create">
                CREATE
                <Create></Create>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <button id="search">
                SEARCH
                <Search></Search>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/workoutsFav">
              <button id="workoutsFav">FAVS</button>
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default WorkoutMenu;
