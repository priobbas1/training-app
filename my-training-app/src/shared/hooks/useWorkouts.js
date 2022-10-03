import { useState } from "react";
import { getWorkoutsList } from "../../http/workouts-api";

function useWorkouts() {
  const [workouts, setWorkouts] = useState(null);
  const [loading, setLoading] = useState(true);
  const loadWorkouts = async () => {
    const res = await getWorkoutsList();
    setWorkouts(res);
    setLoading(false);
  };
  return { workouts, loading, loadWorkouts };
}

export { useWorkouts };
