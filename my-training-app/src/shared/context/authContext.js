import { createContext, useEffect, useState } from "react";

import parseToken from "../utils/parseToken";

const AuthContext = createContext(null);

const token = localStorage.getItem("token");
//const tokenObject = parseToken(token);

function AuthContextProviderComponent({ children }) {
  const [token, setToken] = useState();
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    //localStorage.setItem("token", token);
    /* localStorage.setItem(
      "user",
      JSON.stringify({ token: token, role: "admin" })
    ); */
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
  };

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    /* const tokenParsed = parseToken(token);
    console.log(tokenParsed); */
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProviderComponent };
