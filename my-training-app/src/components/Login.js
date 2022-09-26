import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginAccount } from "../http/user-api";
import { useEffect, useState } from "react";
import { AuthProvider } from "../shared/context/authContext";

import "../components/hojas-stilos/Login.css";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(3).max(30).required(),
  })
  .required();

function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await loginAccount(data);
      if (res.status === 200) {
        console.log(res.data);
        localStorage.setItem("token", res.data[1].accesToken);
        //updateToken();
        AuthProvider();
        setIsSubmitSuccessful(true);
      } else if (res.status === "400") {
        console.log(res);
        setIsSubmitSuccessful(false);
      } else if (res.status === "404") {
        console.log(res);
        setIsSubmitSuccessful(false);
      } else if (res.status === "401") {
        console.log(res);
        setIsSubmitSuccessful(false);
      } else if (res.status === "500") {
        console.log(res);
        setIsSubmitSuccessful(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!isSubmitSuccessful) return;

    reset({ email: "", password: "" });
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <section className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">email</label>
          <input
            {...register("email")}
            autoComplete="off"
            placeholder="example@mail.com"
          ></input>
          <p>{errors.email?.message}</p>

          <label htmlFor="password">password</label>
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            placeholder="************"
          ></input>
          <p>{errors.password?.message}</p>

          <input type="submit" value="login"></input>
          <input
            type="button"
            onClick={() => {
              reset({ email: "", password: "" }, { keepErrors: true });
            }}
            value="clear"
          />
        </form>
        <button
          onClick={() => setShowPassword(showPassword ? false : true)}
          className="password"
        >
          See password
        </button>
      </section>

      <span>
        <Link to={"/"}>Go to Home</Link>
      </span>
    </>
  );
}

export default Login;