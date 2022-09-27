import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createAccount } from "../http/user-api";
import { useEffect, useState } from "react";
import "../components/hojas-stilos/Register.css";
import { Link } from "react-router-dom";

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

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [lastResponse, setLastResponse] = useState(null);

  const onSubmit = async (data) => {
    try {
      const res = await createAccount(data);
      if (res.status === "201") {
        setLastResponse(201);
        console.log(res);
        setIsSubmitSuccessful(true);
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
    
      <section className="register">

      <h2 className="register-title">Registrate</h2>
      <p className="form-paragraph"> ¿Ya tienes cuenta? <Link to="/login" className="register-link"> Pincha aquì </Link> </p>
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-home">

            <label htmlFor="email">Email</label>

            <input {...register("email")} autoComplete="on"></input>
            <p>{errors.email?.message}</p>
            <p>{lastResponse}</p>
        

          

            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              autoComplete="on"
            ></input>
            <p>{errors.password?.message}</p>
          

          
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirm"
              {...register("confirm")}
              autoComplete="on"
            />
            {errors.confirm && <p>Your passwords do no match</p>}
          
            </div>
            
          <input type="submit" className="register-submit"></input>
          <input
            type="button"
            onClick={() => {
              reset(
                { email: "", password: "", confirm: "" },
                { keepErrors: true }
              );
            }}
            value="Clear" className="clear"
          />
           <button
          onClick={() => setShowPassword(showPassword ? false : true)}
          
        className="seep" >
          See password
        </button>
        </form>
       
      </section>

      <span>
        <Link to={"/"}>Go to Home</Link>
      </span>
    </>
  );
}

export default Register;