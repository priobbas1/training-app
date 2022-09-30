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

  const onSubmit = async (data) => {
    try {
      const res = await loginAccount(data);
      if (res.status === 200) {
        console.log(res.data);
        login(res.data[1].accesToken);
        navigate("/");
        //updateToken();
        //AuthProvider();
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
        <h2 className="form-title">Inicia Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-container">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              placeholder="example@mail.com"
              autoComplete="off"
            ></input>
            <p>{errors.email?.message}</p>

            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="************"
              autoComplete="off"
            ></input>
            <p>{errors.password?.message}</p>
          </div>

          <button type="submit">Login</button>
          <button
            onClick={() => {
              reset({ email: "", password: "" }, { keepErrors: true });
            }}
          >
            Clear
          </button>
        </form>
        <button onClick={() => setShowPassword(showPassword ? false : true)}>
          Show password
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
