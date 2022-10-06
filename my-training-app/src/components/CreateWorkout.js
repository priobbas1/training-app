import { useForm } from "react-hook-form";
import { createWorkout } from "../http/workouts-api";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const schema = yup
  .object({
    name: yup.string().min(3).required(),
    description: yup.string().min(16).max(255).required(),
    image: yup.mixed().required(),
    typology: yup.string().min(3).max(30).required(),
    muscle: yup.string().min(3).max(60).required(),
  })
  .required();

function CreateWorkout() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [requestError, setRequestError] = useState(null);

  const onSubmit = async (form) => {
    try {
      const res = await createWorkout(form);
      console.log(res);
      if (res?.status === 201) {
        console.log(res.data);
        navigate("/workouts");
      } else if (res.response.data[0].message === "photo not found") {
        setRequestError("image is required");
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <section className="form-container">
        <h2 className="form-title">Create Workout</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-container">
            <label htmlFor="name" className="field-input">
              Name
            </label>
            <input {...register("name")} className="field-input"></input>
            <p className="error">{errors.name?.message}</p>

            <label htmlFor="description" className="field-input">
              Description
            </label>
            <input {...register("description")} className="field-input"></input>
            <p className="error">{errors.description?.message}</p>

            <label htmlFor="image">Image</label>
            <input
              {...register("image")}
              type="file"
              className="field-input"
            ></input>
            <p className="error">
              {(errors.image && <span>{errors.image?.message}</span>) ||
                (requestError && <span className="error">{requestError}</span>)}
            </p>

            <label htmlFor="typology" className="field-input">
              Typology
            </label>
            <input {...register("typology")} className="field-input"></input>
            <p className="error">{errors.typology?.message}</p>

            <label htmlFor="muscle" className="field-input">
              Muscle
            </label>
            <input {...register("muscle")} className="field-input"></input>
            <p className="error">{errors.muscle?.message}</p>
          </div>

          <button type="submit" id="submit">
            Create
          </button>
        </form>
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
              { keepErrors: false }
            );
            setRequestError(null);
          }}
          id="clean"
        >
          Clear
        </button>
        <span className="home-link">
          <Link to={"/"} className="home-link">
            Go to Home
          </Link>
        </span>
      </section>
    </>
  );
}

export default CreateWorkout;
