import { createContext, useState } from "react";

import { parseToken } from "../utils/parseToken";

const AuthContext = createContext(null);

function AuthContextProviderComponent({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState();
  const tokenObject = parseToken(token);
  const [isUserLogged, setIsUserLogged] = useState(!!tokenObject);
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  /* useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]); */

  const logout = () => {
    localStorage.removeItem("token");
    setIsAdmin(null);
    setIsUserLogged(null);
  };

  const login = (token, exp) => {
    setToken(token);
    setTimeout(() => {
      logout();
    }, exp * 1000);
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

  const getToken = () => {
    return token;
  };

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isAdmin, isUserLogged, getToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProviderComponent };
