import { useState } from "react";
import { Link } from "react-router-dom";
import { getWorkoutsListFav } from "../http/workouts-api";
import Header from "./Header";
import WorkoutsList from "./WorkoutsList";

function WorkoutsFav() {
  const [workoutsFav, setWorkoutsFav] = useState();
  const onSubmit = async () => {
    try {
      const res = await getWorkoutsListFav();
      setWorkoutsFav(res.data.data);
      console.log(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <Header></Header>
      <section className="form-container">
        <h2 className="form-title">Workout Favs</h2>
        <button onClick={() => onSubmit()}>Favs</button>
      </section>
      <span>
        <Link to={"/"} className="home-link">
          Go to Home
        </Link>
      </span>

      <main className="workouts-list">
        {workoutsFav ? (
          <WorkoutsList workouts={workoutsFav}></WorkoutsList>
        ) : (
          <p>loading workouts</p>
        )}
      </main>
    </>
  );
}

export default WorkoutsFav;