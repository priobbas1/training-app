import { useForm } from "react-hook-form";
import { editWorkout } from "../http/workouts-api";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate, Link } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().email().required(),
    description: yup.string().min(3).max(30).required(),
    typology: yup.string().min(3).max(30).required(),
    muscle: yup.string().min(3).max(60).required(),
  })
  .required();

function EditWorkout() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(/* {
    resolver: yupResolver(schema),
  } */);

  //const { workoutId, useWorkoutId } = useWorkoutId();

  const onSubmit = async (form) => {
    try {
      //console.log(workoutId);
      const res = await editWorkout(form);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <section className="form-container">
        <h2 className="form-title">Edit Workout</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-container">
            <label htmlFor="name">Name</label>
            <input {...register("name")}></input>
            <p>{errors.email?.message}</p>

            <label htmlFor="description">Description</label>
            <input {...register("description")}></input>
            <p>{errors.description?.message}</p>

            <label htmlFor="image">Image</label>
            <input {...register("image")} type="file"></input>
            <p>{errors.image?.message}</p>

            <label htmlFor="typology">Typology</label>
            <input {...register("typology")}></input>
            <p>{errors.typology?.message}</p>

            <label htmlFor="muscle">Muscle</label>
            <input {...register("muscle")}></input>
            <p>{errors.muscle?.message}</p>
          </div>

          <button type="submit">Edit</button>
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

export default EditWorkout;
