import { useState } from "react";
import { loginAccount } from "../http/user-api";

export const Login = () => {
  const initialState = { email: "", password: "" };
  const [loginForm, setLoginForm] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginAccount(loginForm);
      if (res.status === 200) {
        console.log(res.data[1]);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e, field) => {
    const modifiedData = { ...loginForm, [field]: e.target.value };
    setLoginForm(modifiedData);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="login">
        <div className="form-group">
          <label htmlFor="user">User</label>

          <input
            value={loginForm.email}
            onChange={(e) => {
              handleChange(e, "email");
            }}
            name="email"
            id="email"
          ></input>
        </div>

        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            value={loginForm.password}
            onChange={(e) => {
              handleChange(e, "password");
            }}
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
          ></input>
        </div>

        <input type="submit" className="enviar"></input>
        <button onClick={() => setLoginForm(initialState)} className="clear">
          Clear
        </button>
        <button
          onClick={() => setShowPassword(showPassword ? false : true)}
          className="password"
        >
          See password
        </button>
      </form>
    </section>
  );
};
