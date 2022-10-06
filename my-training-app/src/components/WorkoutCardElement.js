import { Link } from "react-router-dom";
import "./WorkoutCardElement.css";
function WorkoutCardElement({ workout }) {
  return (
    <main>
      <section className="workout-card">
        <article className="workout-card">
          <img
            className="workout-gif-card"
            src={`${process.env.REACT_APP_BACKEND}uploads/workouts/${workout.image}`}
            title={`${workout.name}`}
            alt={`${workout.name}`}
          />
          <h2 className="workout-card">{workout.name}</h2>
          <h3 className="workout-card">{workout.muscle}</h3>
          {/* <p className="workout-card">{workout.typology}</p> */}
          <p className="workout-card">{workout.description}</p>
        </article>
        <Link to="/workouts">Back</Link>
      </section>
    </main>
  );
}

export default WorkoutCardElement;
