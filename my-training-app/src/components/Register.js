import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createAccount } from "../http/user-api";
import { useState } from "react";

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
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const res = await createAccount(data);
    console.log(res);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">email</label>
      <input {...register("email")}></input>
      <p>{errors.email?.message}</p>

      <label htmlFor="password">password</label>
      <input
        {...register("password")}
        type={showPassword ? "text" : "password"}
      ></input>
      <p>{errors.password?.message}</p>

      <label htmlFor="confirm">confirm password</label>
      <input
        type={showPassword ? "text" : "password"}
        id="confirm"
        {...register("confirm")}
      />
      {errors.confirm && <p>Your passwords do no match</p>}

      <input type="submit"></input>
      <input type="reset" value="Clear" />

      <button
        onClick={() => setShowPassword(showPassword ? false : true)}
        className="showPassword"
      >
        See password
      </button>
    </form>
  );
}

export default Register;
