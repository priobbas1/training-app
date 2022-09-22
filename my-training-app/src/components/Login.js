import { useState } from "react";

function Login() {
  const initialState = { email: "", password: "" };
  const [loginForm, setLoginForm] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e, field) => {
    const modifiedData = { ...loginForm, [field]: e.target.value };
    setLoginForm(modifiedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">user</label>
      <input
        value={loginForm.email}
        onChange={(e) => {
          handleChange(e, "email");
        }}
        name="email"
        id="email"
      ></input>
      <label htmlFor="password">password</label>
      <input
        value={loginForm.password}
        onChange={(e) => {
          handleChange(e, "password");
        }}
        name="password"
        id="password"
        type={showPassword ? "text" : "password"}
      ></input>
      <input type="submit"></input>
      <button onClick={() => setLoginForm(initialState)}>Clear</button>
      <button onClick={() => setShowPassword(showPassword ? false : true)}>
        See password
      </button>
    </form>
  );
}

export default Login;
