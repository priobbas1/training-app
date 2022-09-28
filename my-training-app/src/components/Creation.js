import { useForm } from "react-hook-form";
import { createWorkout } from "../http/workouts-api";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate, Link } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().email().required(),
    description: yup.string().min(3).max(30).required(),
  })
  .required();

function Creation() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(/* {
    resolver: yupResolver(schema),
  } */);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await createWorkout(data);
      if (res.status === 200) {
        console.log(res.data);
      } else if (res.status === "400") {
        console.log(res);
      } else if (res.status === "404") {
        console.log(res);
      } else if (res.status === "401") {
        console.log(res);
      } else if (res.status === "500") {
        console.log(res);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <section className="form-container">
        <h2>Create Workout</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-container">
            <label htmlFor="name">Name</label>
            <input {...register("name")}></input>
            <p>{errors.email?.message}</p>

            <label htmlFor="description">Description</label>
            <input {...register("description")}></input>
            <p>{errors.password?.message}</p>

            <label htmlFor="image">Image</label>
            <input {...register("image")} type="file"></input>
            <p>{errors.password?.message}</p>

            <label htmlFor="typology">Typology</label>
            <input {...register("typology")}></input>
            <p>{errors.password?.message}</p>

            <label htmlFor="muscle">Muscle</label>
            <input {...register("muscle")}></input>
            <p>{errors.password?.message}</p>
          </div>

          <button type="submit">Create</button>
          <button
            onClick={() => {
              reset(
                {
                  name: "",
                  description: "",
                  image: "",
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

export default Creation;
