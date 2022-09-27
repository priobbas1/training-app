import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    localStorage.setItem("token", token);
    /* localStorage.setItem(
      "user",
      JSON.stringify({ token: token, role: "admin" })
    ); */
  }, [token]);

  const logout = () => {
    setToken("");
  };

  const login = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
