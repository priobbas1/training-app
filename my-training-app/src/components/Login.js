import { useForm } from "react-hook-form";
import { AuthContext } from "../shared/context/authContext";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginAccount } from "../http/user-api";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
        <h2 className="form-title">Inicia Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-container">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              placeholder="example@mail.com"
              autoComplete="off"
            ></input>
            <p className="error">{errors.email?.message}</p>

            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="************"
              autoComplete="off"
            ></input>
            <p className="error">{errors.password?.message}</p>
            <p className="error">{requestError}</p>
          </div>

          <button type="submit">Login</button>
          <button
            onClick={() => {
              reset({ email: "", password: "" }, { keepErrors: false });
            }}
          >
            Clear
          </button>
        </form>
        <button onClick={() => setShowPassword(showPassword ? false : true)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M24 31.5q3.55 0 6.025-2.475Q32.5 26.55 32.5 23q0-3.55-2.475-6.025Q27.55 14.5 24 14.5q-3.55 0-6.025 2.475Q15.5 19.45 15.5 23q0 3.55 2.475 6.025Q20.45 31.5 24 31.5Zm0-2.9q-2.35 0-3.975-1.625T18.4 23q0-2.35 1.625-3.975T24 17.4q2.35 0 3.975 1.625T29.6 23q0 2.35-1.625 3.975T24 28.6Zm0 9.4q-7.3 0-13.2-4.15Q4.9 29.7 2 23q2.9-6.7 8.8-10.85Q16.7 8 24 8q7.3 0 13.2 4.15Q43.1 16.3 46 23q-2.9 6.7-8.8 10.85Q31.3 38 24 38Zm0-15Zm0 12q6.05 0 11.125-3.275T42.85 23q-2.65-5.45-7.725-8.725Q30.05 11 24 11t-11.125 3.275Q7.8 17.55 5.1 23q2.7 5.45 7.775 8.725Q17.95 35 24 35Z" />
          </svg>
        </button>
        <Link to="/register">¿Aún no estás registrado?</Link>
      </section>
      <span>
        <Link to={"/"} className="home-link">
          Go to Home
        </Link>
      </span>
    </>
  );
}

export default Login;
