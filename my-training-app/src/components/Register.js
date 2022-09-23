import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createAccount } from "../http/user-api";

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
  const onSubmit = (data) => {
    createAccount(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">email</label>
      <input {...register("email")}></input>
      <p>{errors.email?.message}</p>

      <label htmlFor="password">password</label>
      <input {...register("password")} type="password"></input>
      <p>{errors.password?.message}</p>

      <label htmlFor="confirm">confirm password</label>
      <input type="password" id="confirm" {...register("confirm")} />
      {errors.confirm && <p>Your passwords do no match</p>}

      <input type="submit"></input>
      <input type="reset" value="Clear" />
    </form>
  );
}

export default Register;
