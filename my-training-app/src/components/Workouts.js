import { getWorkoutsList } from "../http/workouts-api";

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
    </>
  );
}

export default Workouts;
