import { Navigate } from "react-router-dom";
import useAuth from "../shared/hooks/useAuth";

function NotLoggedRoute({ children }) {
  const { isUserLogged } = useAuth();
  return !isUserLogged ? children : <Navigate to="/"></Navigate>;
}

function LoggedRoute({ children }) {
  const { isUserLogged } = useAuth();
  return isUserLogged ? children : <Navigate to="/"></Navigate>;
}

export { NotLoggedRoute, LoggedRoute };