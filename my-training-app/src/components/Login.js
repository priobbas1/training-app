import { useForm } from "react-hook-form";
import { AuthContext } from "../shared/context/authContext";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginAccount } from "../http/user-api";
import { useContext, useState } from "react";
/* import { AuthProvider } from "../shared/context/authContext"; */
import { useNavigate } from "react-router-dom";

import "../components/hojas-stilos/Login.css";
import { Link } from "react-router-dom";

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

  const onSubmit = async (data) => {
    try {
      const res = await loginAccount(data);
      if (res.status === 200) {
        console.log(res.data);
        login(res.data[1].accesToken);
        navigate("/");

        //updateToken();
        /* AuthProvider(); */
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
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="form-title">Inicia Sesion</h2>
        <p className="form-paragraph">
          ¿Aùn no tienes cuenta?{" "}
          <Link to="/register" className="form-link">
            {" "}
            Entra aquí{" "}
          </Link>
        </p>

        <div className="form-container">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            autoComplete="off"
            placeholder="example@mail.com"
          ></input>
          <p>{errors.email?.message}</p>

          <label htmlFor="password" className="form-password">
            Password
          </label>
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            placeholder="************"
          ></input>
        </div>
        <p>{errors.password?.message}</p>

        <input type="submit" className="form-submit" value="Login"></input>

        <input
          type="button"
          className="form-clear"
          onClick={() => {
            reset({ email: "", password: "" }, { keepErrors: true });
          }}
          value="Clear"
        />

        <button
          onClick={() => setShowPassword(showPassword ? false : true)}
          className="see"
        >
          See Password
        </button>
      </form>

      <span className="go">
        <Link to={"/"}>Go to Home</Link>
      </span>
    </>
  );
}

export default Login;
