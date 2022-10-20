import { useEffect, useState } from "react";
import { getWorkoutsList, getWorkoutsListFav } from "../http/workouts-api";
import Header from "./Header";
import WorkoutMenu from "./WorkoutMenu";
import WorkoutsList from "./WorkoutsList";

function Workouts() {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    async function loadWorkouts() {
      const res = await getWorkoutsList();
      setWorkouts(res);
      //const res2 = await getWorkoutsListFav();
      /* const workoutFavId = res2.data.data[0].ejercicio_id;
      console.log(workoutFavId); */
    }
    loadWorkouts();
  }, []);

  return (
    <>
      <Header></Header>
      <main className="workouts-list">
        <WorkoutMenu></WorkoutMenu>
        {workouts ? (
          <WorkoutsList workouts={workouts.data.data}></WorkoutsList>
        ) : (
          <p>loading workouts</p>
        )}
      </main>
    </>
  );
}

export default Workouts;
