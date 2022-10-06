import '../components/hojas-stilos/workoutElement.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteWorkout,
  dislikeWorkout,
  likeWorkout,
} from "../http/workouts-api";



 function WorkoutElement({ workout }) {
  const navigate = useNavigate();

  const [workoutId, setWorkoutId] = useState(workout.id);

  const deleteWorkoutId = async (workoutId) => {
    try {
      const res = await deleteWorkout(workoutId);
      console.log(res);
      if (res[0].status === "200") {
        window.location.reload(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

   
  const likeWorkoutId = async (workoutId) => {
    let res = null;
    try {
      res = await likeWorkout(workoutId);
      if (res.status === 200) {
        console.log(res.data);
        navigate("/workouts");
      }
    } catch (e) {
      console.error(e);
    }
    return res;
  };

  const dislikeWorkoutId = async (workoutId) => {
    try {
      const res = await dislikeWorkout(workoutId);
      if (res.status === 200) {
        console.log(res.data);
        navigate("/workouts");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const likeDislike = async (workoutId) => {
    let res = null;
    try {
      const res = await dislikeWorkout(workoutId);
      if (res.status === 200) {
        console.log(res);
        navigate("/workouts");
      }
    } catch (e) {
      //console.log(e);
      res = await likeWorkout(workoutId);
      if (res.status === 201) {
        console.log(res.data);
        navigate("/workouts");
      }
    }
  };
 
  return (
    <li className="workout-list">
      <section className="workout-list">
        <article className="workout-list">
          
            <img
              className="workout-gif"
              src={`${process.env.REACT_APP_BACKEND}uploads/workouts/${workout.image}`}
              title={`${workout.name}`}
              alt={`${workout.name}`}
            />
          
          <h2 className="workout-name">{workout.name}</h2>
          <h3 className="workout-muscle">{/* {workout.muscle} */}</h3>

          <Link to={`/edit/${workoutId}`} className="edit">
            <button>
              EDIT
              <svg height="48" width="48">
                <path d="M9 39h2.2l22.15-22.15-2.2-2.2L9 36.8Zm30.7-24.3-6.4-6.4 2.1-2.1q.85-.85 2.1-.85t2.1.85l2.2 2.2q.85.85.85 2.1t-.85 2.1Zm-2.1 2.1L12.4 42H6v-6.4l25.2-25.2Zm-5.35-1.05-1.1-1.1 2.2 2.2Z" />
              </svg>
            </button>
          </Link>
          
     

          <button onClick={() => likeDislike(workout.id)} >
            FAV
            <svg height="48" width="48" className="favorito"
            >
              <path d="m16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55ZM24 26.25Z" />
            </svg>
          </button> 

          <button onClick={() => deleteWorkoutId(workout.id)} className="delete">
            DELETE
            <svg height="48" width="48">
              <path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z" />
            </svg>
          </button>

          <Link to={`/card/${workoutId}`} className="details">
            <button>DETAILS</button>
          </Link>
          
        </article>
      </section>
    </li>
  );
}
export default WorkoutElement;

