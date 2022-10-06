import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWorkoutsList } from "../http/workouts-api";
import { Create, Search } from "../shared/icons/Icons";
import Header from "./Header";
import WorkoutMenu from "./WorkoutMenu";
import WorkoutsList from "./WorkoutsList";

function Workouts() {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    async function loadWorkouts() {
      const res = await getWorkoutsList();
      setWorkouts(res);
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
