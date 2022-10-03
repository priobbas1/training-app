import { useForm } from "react-hook-form";
import {
  createWorkout,
  editWorkout,
  searchWorkout,
} from "../http/workouts-api";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate, Link } from "react-router-dom";

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
  let parameter = null;
  let value = null;
  const onSubmit = async (form) => {
    try {
      console.log(form);
      if (form.description) {
        parameter = "description";
        value = form.description;
      } else if (form.name) {
        parameter = "name";
        value = form.name;
      } else if (form.muscle) {
        parameter = "muscle";
        value = form.muscle;
      } else if (form.typology) {
        parameter = "typology";
        value = form.typology;
      } else {
        console.log("no parameter");
      }
      const res = await searchWorkout(value, parameter);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <section className="form-container">
        <h2 className="form-title">Search Workout</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-container">
            <label htmlFor="name">Name</label>
            <input {...register("name")}></input>
            <p>{errors.email?.message}</p>

            <label htmlFor="description">Description</label>
            <input {...register("description")}></input>
            <p>{errors.description?.message}</p>

            <label htmlFor="typology">Typology</label>
            <input {...register("typology")}></input>
            <p>{errors.typology?.message}</p>

            <label htmlFor="muscle">Muscle</label>
            <input {...register("muscle")}></input>
            <p>{errors.muscle?.message}</p>
          </div>

          <button type="submit">Search</button>
          <button
            onClick={() => {
              reset(
                {
                  name: "",
                  description: "",
                  file: "",
                  typology: "",
                  muscle: "",
                },
                { keepErrors: true }
              );
            }}
          >
            Clear
          </button>
        </form>
      </section>
      <span>
        <Link to={"/"} className="home-link">
          Go to Home
        </Link>
      </span>
    </>
  );
}

export default SearchWorkout;
