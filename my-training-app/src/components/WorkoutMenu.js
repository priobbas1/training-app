import { Link } from "react-router-dom";
import { CreateIcon, FavIcon, SearchIcon } from "../shared/icons/Icons";

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
                <CreateIcon></CreateIcon>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <button id="search">
                SEARCH
                <SearchIcon></SearchIcon>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/workoutsFav">
              <button id="workoutsFav">
                FAVS
                <FavIcon></FavIcon>
              </button>
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default WorkoutMenu;
