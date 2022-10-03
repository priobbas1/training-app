import { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";

/* Custom hook que simplifica un poco el usar el contexto de auth */
function useWorkoutId() {
  const context = useContext(WorkoutContext);
  return context;
}

export default useWorkoutId;
