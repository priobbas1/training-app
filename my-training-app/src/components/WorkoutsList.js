import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import image from "./assets/workout-images/farmers-carry.gif";
import WorkoutElement from "./WorkoutElement";

import "./WorkoutsList.css";

function WorkoutsList() {
  /*   if (loading) return <p>loading workouts</p>;
  if (error) return <p>{error}</p>; */
  return (
    <ul className="workout-list">
      <WorkoutElement></WorkoutElement>
    </ul>
  );
}

export default WorkoutsList;
