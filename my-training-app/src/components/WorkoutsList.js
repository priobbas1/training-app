import { useNavigate } from "react-router-dom";
import image from "./assets/workout-images/farmers-carry.gif";

import "./WorkoutsList.css";

function WorkoutsList() {
  const navigate = useNavigate();
  return (
    <main className="workouts-list">
      <h1 className="workouts-list">Workouts</h1>
      <ul className="workout-list">
        <li className="workout-list">
          <section className="workout-list">
            <article className="workout-list">
              <img
                className="workout-gif"
                src={image}
                title="Farmer's Carry"
                alt="displaying Farmer's Carry workout"
              />
              <h2 className="workout-name">Farmer's Carry</h2>
              <h3 className="workout-muscle">full body workout</h3>
              <button onClick={() => navigate("/create")}></button>
            </article>
          </section>
        </li>
        <li className="workout-list">
          <section className="workout-list">
            <article className="workout-list">
              <img
                className="workout-gif"
                src={image}
                title="Farmer's Carry"
                alt="displaying Farmer's Carry workout"
              />
              <h2 className="workout-name">Farmer's Carry</h2>
              <h3 className="workout-muscle">full body workout</h3>
            </article>
          </section>
        </li>
        <li className="workout-list">
          <section className="workout-list">
            <article className="workout-list">
              <img
                className="workout-gif"
                src={image}
                title="Farmer's Carry"
                alt="displaying Farmer's Carry workout"
              />
              <h2 className="workout-name">Farmer's Carry</h2>
              <h3 className="workout-muscle">full body workout</h3>
            </article>
          </section>
        </li>
        <li className="workout-list">
          <section className="workout-list">
            <article className="workout-list">
              <img
                className="workout-gif"
                src={image}
                title="Farmer's Carry"
                alt="displaying Farmer's Carry workout"
              />
              <h2 className="workout-name">Farmer's Carry</h2>
              <h3 className="workout-muscle">full body workout</h3>
            </article>
          </section>
        </li>
        <li className="workout-list">
          <section className="workout-list">
            <article className="workout-list">
              <img
                className="workout-gif"
                src={image}
                title="Farmer's Carry"
                alt="displaying Farmer's Carry workout"
              />
              <h2 className="workout-name">Farmer's Carry</h2>
              <h3 className="workout-muscle">full body workout</h3>
            </article>
          </section>
        </li>
        <li className="workout-list">
          <section className="workout-list">
            <article className="workout-list">
              <img
                className="workout-gif"
                src={image}
                title="Farmer's Carry"
                alt="displaying Farmer's Carry workout"
              />
              <h2 className="workout-name">Farmer's Carry</h2>
              <h3 className="workout-muscle">full body workout</h3>
            </article>
          </section>
        </li>
        <li className="workout-list">
          <section className="workout-list">
            <article className="workout-list">
              <img
                className="workout-gif"
                src={image}
                title="Farmer's Carry"
                alt="displaying Farmer's Carry workout"
              />
              <h2 className="workout-name">Farmer's Carry</h2>
              <h3 className="workout-muscle">full body workout</h3>
            </article>
          </section>
        </li>
        <li className="workout-list">
          <section className="workout-list">
            <article className="workout-list">
              <img
                className="workout-gif"
                src={image}
                title="Farmer's Carry"
                alt="displaying Farmer's Carry workout"
              />
              <h2 className="workout-name">Farmer's Carry</h2>
              <h3 className="workout-muscle">full body workout</h3>
            </article>
          </section>
        </li>
      </ul>
    </main>
  );
}

export default WorkoutsList;
