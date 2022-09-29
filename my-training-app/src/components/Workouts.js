import {
  deleteWorkout,
  dislikeWorkout,
  editWorkout,
  getWorkoutDetails,
  getWorkoutsList,
  likeWorkout,
} from "../http/workouts-api";
import Creation from "./Creation";

function Workouts() {
  return (
    <>
      <button
        onClick={async () => {
          const res = await getWorkoutsList();
          console.log(res);
        }}
      >
        GET WORKOUTS
      </button>
      <button
        onClick={async () => {
          const res = await getWorkoutDetails(1);
          console.log(res);
        }}
      >
        GET WORKOUT DETAILS
      </button>
      <button
        onClick={async () => {
          const res = await deleteWorkout(3);
          console.log(res);
        }}
      >
        DELETE WORKOUT
      </button>
      <button
        onClick={async () => {
          const res = await likeWorkout(1);
          console.log(res);
        }}
      >
        LIKE WORKOUT
      </button>
      <button
        onClick={async () => {
          const res = await dislikeWorkout(1);
          console.log(res);
        }}
      >
        DISLIKE WORKOUT
      </button>
      <button
        onClick={async () => {
          const res = await editWorkout();
          console.log(res);
        }}
      >
        EDIT WORKOUT
      </button>
      <Creation></Creation>
    </>
  );
}

export default Workouts;
