import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWorkoutDetails } from "../http/workouts-api";
import WorkoutCardElement from "./WorkoutCardElement";
import Header from "./Header";

function WorkoutCard() {
  const { workoutId } = useParams();
  const [workout, setWorkout] = useState(null);
  async function loadWorkout() {
    const res = await getWorkoutDetails(workoutId);
    setWorkout(res.data[1]);
  }
  useEffect(() => {
    loadWorkout();
  }, []);

  return (
    <>
      <Header></Header>
      {workout ? (
        <WorkoutCardElement workout={workout}></WorkoutCardElement>
      ) : (
        <p>loading workouts</p>
      )}
    </>
  );
}

export default WorkoutCard;
