function WorkoutCard({ workout }) {
  return (
    <li className="workout-list">
      <section className="workout-list">
        <article className="workout-list">
          {
            <img
              className="workout-gif"
              src={`${process.env.REACT_APP_BACKEND}uploads/workouts/${workout.image}`}
              title="Farmer's Carry"
              alt="Farmer's Carry workout"
            />
          }
          <h2 className="workout-name">{workout.name}</h2>
          <h3 className="workout-muscle">{workout.muscle}</h3>
          <p>{workout.description}</p>
        </article>
      </section>
    </li>
  );
}

export default WorkoutCard;
