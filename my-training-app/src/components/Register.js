import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createAccount } from "../http/user-api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(3).max(30).required(),
    confirm: yup
      .string()
      .min(3)
      .max(30)
      .required()
      .oneOf([yup.ref("password")]),
  })
  .required();

function Register() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [lastResponse, setLastResponse] = useState(null);

  const onSubmit = async (data) => {
    try {
      const res = await createAccount(data);
      if (res.status === "201") {
        setLastResponse(201);
        console.log(res);
        navigate("/login");
        /* setIsSubmitSuccessful(true); */
      } else if (res.status === "409") {
        setLastResponse(
          "this email address is already associated with another account"
        );
        console.log(res);
        setIsSubmitSuccessful(false);
      } else if (res.status === "400") {
        console.log(res);
        setIsSubmitSuccessful(false);
      } else if (res.status === "500") {
        console.log(res);
        setIsSubmitSuccessful(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!isSubmitSuccessful) return;

    reset({ email: "", password: "", confirm: "" });
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <section className="form-container">
        <h2 className="form-title">Regístrate</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-container">
            <label htmlFor="email">Email</label>
            <input {...register("email")} autoComplete="off"></input>
            <p>{errors.email?.message}</p>

            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="************"
              autoComplete="off"
            ></input>
            <p>{errors.password?.message}</p>

            <label htmlFor="confirm">Confirm Password</label>
            <input
              {...register("confirm")}
              type={showPassword ? "text" : "password"}
              autoComplete="off"
            />
            <p>{errors.confirm && <p>your passwords do no match</p>}</p>
          </div>

          <button type="submit">Sign up</button>
        </form>
        <button
          onClick={() => {
            reset(
              { email: "", password: "", confirm: "" },
              { keepErrors: false }
            );
          }}
        >
          Clear
        </button>
        <button onClick={() => setShowPassword(showPassword ? false : true)}>
          See password
        </button>

        <Link to="/login" className="register-link">
          {" "}
          ¿Ya tienes cuenta?{" "}
        </Link>
      </section>
      <span>
        <Link to={"/"}>Go to Home</Link>
      </span>
    </>
  );
}

export default Register;
