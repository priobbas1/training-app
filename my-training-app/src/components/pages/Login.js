import { useState } from "react";
import '../hojas-stilos/Login.css';
import hero from '../assets/images/hero_image.png'

 export const Login = () => {
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
>
</input>
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
      >

      </input>
    </div> 
      

      <input type="submit" className="enviar"></input>
      <button onClick={() => setLoginForm(initialState)} className="clear" >Clear</button>
      <button onClick={() => setShowPassword(showPassword ? false : true)} className="password">
        See password
      </button>
    </form>

    <img src={hero} alt="hero"  className="img"/>
     </section>


  );
}





    
    