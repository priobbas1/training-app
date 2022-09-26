import React, { useState } from "react";
import { loginAccount } from "../../http/user-api";

const parseToken = (token) => {
  if (token) {
    const splittedToken = token.split(".");
    const chunkWithData = splittedToken[1];
    return JSON.parse(atob(chunkWithData));
  }
  return null;
};

const AuthContext = React.createContext();

const token = localStorage.getItem("token");
const tokenObject = parseToken(token);

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(tokenObject);
  const [isUserLogged, setIsUserLogged] = useState(!!tokenObject);

  const [isAdmin, setIsAdmin] = useState(+tokenObject?.id === 1);

  const signIn = async (formData) => {
    const token = await loginAccount(formData);
    const tokenObject = parseToken(token.data);
    localStorage.setItem("token", token.data);
    setUserData(tokenObject);
    setIsUserLogged(!!tokenObject);
    setIsAdmin(+tokenObject?.id === 1);

    console.log(token.data);
  };

  const signOut = async () => {
    setUserData(null);
    setIsUserLogged(false);
    setIsAdmin(false);

    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ userData, isUserLogged, isAdmin, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
