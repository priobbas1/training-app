import WorkoutElement from "./WorkoutElement";
import "./WorkoutsList.css";

function WorkoutsList({ workouts, setWorkouts }) {
  return (
    <ul className="workout-list">
      {workouts.map((workout) => {
        return (
          <WorkoutElement
            workout={workout}
            setWorkouts={setWorkouts}
            key={workout.image}
          ></WorkoutElement>
        );
      })}
    </ul>
  );
}

export default WorkoutsList;
