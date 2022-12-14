import { useForm } from "react-hook-form";
import {
  createWorkout,
  editWorkout,
  searchWorkout,
} from "../http/workouts-api";
import Select from "react-select";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import WorkoutMenu from "./WorkoutMenu";
import WorkoutsList from "./WorkoutsList";

/* const schema = yup
  .object({
    name: yup.string().email().required(),
    description: yup.sCreatering().min(3).max(30).required(),
  })
  .required(); */

function SearchWorkout() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(/* {
    resolver: yupResolver(schema),
  } */);
  const [parameter, setParameter] = useState("name");
  const [workoutsFiltered, setWorkoutsFiltered] = useState(null);
  const [requestError, setRequestError] = useState(null);
  //let parameter = null;
  let value = null;

  const options = [
    { value: "name", label: "name" },
    { value: "description", label: "description" },
    { value: "typology", label: "typology" },
    { value: "muscle", label: "muscle" },
  ];

  const onSubmit = async (form) => {
    try {
      if (form.parameterForm) {
        console.log(form);
        console.log(parameter);
        const res = await searchWorkout(parameter, form.parameterForm);
        setWorkoutsFiltered(res.data.data);
        console.log(res.data.data);
      } else {
        setRequestError("search value is required");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header></Header>
      <section className="form-container">
        <h2 className="form-title">Search Workout</h2>
        <Select
          options={options}
          onChange={(e) => {
            setParameter(e.value);
          }}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-container">
            <label htmlFor="parameterForm" className="field-input"></label>
            <input
              {...register("parameterForm")}
              className="field-input"
            ></input>
            <p className="error">
              {requestError && <span className="error">{requestError}</span>}
            </p>
          </div>

          <button type="submit" id="submit">
            Search
          </button>
        </form>
        <button
          onClick={() => {
            reset({ parameterForm: "" }, { keepErrors: false });
            setRequestError(null);
          }}
          id="clean"
        >
          Clear
        </button>
      </section>
      <span>
        <Link to={"/"} className="home-link">
          Go to Home
        </Link>
      </span>

      <main className="workouts-list">
        {workoutsFiltered ? (
          <WorkoutsList workouts={workoutsFiltered}></WorkoutsList>
        ) : (
          <p>loading workouts</p>
        )}
      </main>
    </>
  );
}

export default SearchWorkout;
