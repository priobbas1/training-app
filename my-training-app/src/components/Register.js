import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createAccount } from "../http/user-api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { VisibilityOn } from "../shared/icons/Icons";

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
  const [requestError, setRequestError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const res = await createAccount(data);
      if (res.status === "201") {
        setRequestError(null);
        navigate("/login");
      } else if (res.status === "409") {
        setRequestError(
          "this email address is already associated with another account"
        );
        console.log(res);
      } else if (res.status === "400") {
        console.log(res);
      } else if (res.status === "500") {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className="form-container">
        <h2 className="form-title">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-container">
            <label htmlFor="email" className="field-input">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="example@mail.com"
              autoComplete="off"
              className="field-input"
            ></input>
            <p className="error">{errors.email?.message}</p>

            <label htmlFor="password" className="field-input">
              Password
            </label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="************"
              autoComplete="off"
              className="field-input"
            ></input>
            <p className="error">{errors.password?.message}</p>

            <label htmlFor="confirm" className="field-input">
              Confirm password
            </label>
            <input
              {...register("confirm")}
              type={showPassword ? "text" : "password"}
              placeholder="************"
              autoComplete="off"
              className="field-input"
            />
            <p className="error">
              {(errors.confirm && <span>your passwords do no match</span>) ||
                (requestError && <span className="error">{requestError}</span>)}
            </p>
            {/* {requestError && <p className="error">{requestError}</p>} */}
          </div>

          <button type="submit" id="submit">
            Sign up
          </button>
        </form>
        <button
          onClick={() => {
            reset(
              { email: "", password: "", confirm: "" },
              { keepErrors: false }
            );
            setRequestError(null);
          }}
          id="clean"
        >
          Clear
        </button>
        <button
          onClick={() => setShowPassword(showPassword ? false : true)}
          id="password"
        >
          See password
          <VisibilityOn></VisibilityOn>
        </button>
        <span className="home-link">
          <Link to="/login" className="register-link">
            Already have an account? Sign in
          </Link>
        </span>
        <span className="home-link">
          <Link to={"/"} className="home-link">
            Go to Home
          </Link>
        </span>
      </section>
    </>
  );
}

export default Register;
