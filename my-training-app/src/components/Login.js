import { useForm } from "react-hook-form";
import { AuthContext } from "../shared/context/authContext";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginAccount } from "../http/user-api";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { VisibilityOn } from "../shared/icons/Icons";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(3).max(30).required(),
  })
  .required();

function Login() {
  const { login } = useContext(AuthContext);
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

  let res = null;

  const onSubmit = async (data) => {
    try {
      res = await loginAccount(data);
      if (res.status === 200) {
        console.log(res.data);
        login(res.data[1].accesToken);
        navigate("/workouts");
        setRequestError(null);
      } else {
        setRequestError("invalid authentication credentials");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className="form-container">
        <h2 className="form-title">Login</h2>
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
            <p className="error">
              {(errors.password && <span>{errors.password?.message}</span>) ||
                (requestError && <span className="error">{requestError}</span>)}
            </p>
          </div>

          <button type="submit" id="submit">
            Login
          </button>
        </form>
        <button
          onClick={() => {
            reset({ email: "", password: "" }, { keepErrors: false });
            setRequestError(null);
          }}
          id="clean"
        >
          Clear
        </button>
        <button
          className="icon"
          onClick={() => setShowPassword(showPassword ? false : true)}
          id="password"
        >
          See password
          <VisibilityOn></VisibilityOn>
        </button>
        <span className="home-link">
          <Link to="/register" className="register-link">
            Not registered yet? Register here
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

export default Login;
