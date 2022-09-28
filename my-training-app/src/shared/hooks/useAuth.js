import { useContext } from "react";
import { AuthContext } from "../context/authContext";

/* Custom hook que simplifica un poco el usar el contexto de auth */
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default useAuth;
