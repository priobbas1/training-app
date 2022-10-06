import { createContext, useEffect, useState } from "react";

import { parseToken } from "../utils/parseToken";

const AuthContext = createContext(null);

const token = localStorage.getItem("token");
const tokenObject = parseToken(token);

function AuthContextProviderComponent({ children }) {
  const [token, setToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState();
  const [isUserLogged, setIsUserLogged] = useState(!!tokenObject);
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    //localStorage.setItem("token", token);
    /* localStorage.setItem(
      "user",
      JSON.stringify({ token: token, role: "admin" })
    ); */
  }, [token]);

  const tokenParsed = null;

  const logout = () => {
    tokenParsed = null;
    token = null;
    localStorage.removeItem("token");
  };

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    const tokenParsed = parseToken(token);
    const { role } = tokenParsed;
    setIsUserLogged(!!tokenParsed);
    if (role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isAdmin, isUserLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProviderComponent };
