import { useNavigate } from "react-router-dom";
import WorkoutsList from "./WorkoutsList";

function Workouts() {
  return (
    <main className="workouts-list">
      <h1 className="workouts-list">Workouts</h1>
      <WorkoutsList></WorkoutsList>
    </main>
  );
}

export default Workouts;
