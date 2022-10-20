import "../components/hojas-stilos/workoutElement.css";
import { useEffect, useState } from "react";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import {
  deleteWorkout,
  dislikeWorkout,
  getWorkoutFav,
  likeWorkout,
} from "../http/workouts-api";
import {
  DeleteIcon,
  DescriptionIcon,
  EditIcon,
  FavIcon,
} from "../shared/icons/Icons";

function WorkoutElement({ workout }) {
  const navigate = useNavigate();

  const [workoutId, setWorkoutId] = useState(workout.id);
  const [workoutFav, setWorkoutFav] = useState([]);

  useEffect(
    () => async () => {
      try {
        const res = await getWorkoutFav(workoutId);
        if (!!res.data.data.length) {
          setWorkoutFav((workoutFav) => {
            return [...workoutFav, workoutId];
          });
        }
      } catch (e) {
        console.error(e);
      }
    },
    []
  );

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
    /* let res = null;
    try {
      const res = await dislikeWorkout(workoutId);
      if (res.status === 200) {
        //console.log(res);
        navigate("/workouts");
      }
    } catch (e) {
      //console.log(e);
      try {
        res = await likeWorkout(workoutId);
        if (res.status === 201) {
          //console.log(res.data);
          navigate("/workouts");
        }
      } catch (e) {
        //console.log(e);
      }
    } finally {
      try {
        const res = await getWorkoutFav(workoutId);
        if (!!res.data.data.length) {
          setWorkoutFav(true);
        } else {
          setWorkoutFav(false);
        }
      } catch (e) {
        //console.error(e);
      }
    } */

    let res = null;
    try {
      res = await getWorkoutFav(workoutId);
      console.log(res);
    } catch (e) {
      console.log(e);
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
              <EditIcon></EditIcon>
            </button>
          </Link>

          <button onClick={() => likeDislike(workout.id)}>
            FAV
            <FavIcon
            /* classNameValue={workoutFav.map((workoutId) => {
                if (workoutId === workout.id) {
                  return "favIconTrue";
                } else {
                  return "favIconFalse";
                }
              })} */
            ></FavIcon>
          </button>

          <button
            onClick={() => deleteWorkoutId(workout.id)}
            className="delete"
          >
            DELETE
            <DeleteIcon></DeleteIcon>
          </button>

          <Link to={`/card/${workoutId}`} className="details">
            <button>
              DETAILS<DescriptionIcon></DescriptionIcon>
            </button>
          </Link>
        </article>
      </section>
    </li>
  );
}
export default WorkoutElement;
