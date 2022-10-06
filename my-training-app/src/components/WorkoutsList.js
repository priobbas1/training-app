import WorkoutElement from "./WorkoutElement";
import "./WorkoutsList.css";

function WorkoutsList({ workouts }) {
  /*   if (loading) return <p>loading workouts</p>;
  if (error) return <p>{error}</p>; */
  console.log(workouts);
  return (
    <ul className="workout-list">
      {workouts.map((workout) => {
        return (
          <WorkoutElement
            workout={workout}
            key={workout.image}
          ></WorkoutElement>
        );
      })}
    </ul>
  );
}

export default WorkoutsList;
