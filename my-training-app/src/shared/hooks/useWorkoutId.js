import { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";

function useWorkoutId() {
  const context = useContext(WorkoutContext);
  return context;
}

export default useWorkoutId;
