import { Navigate } from "react-router-dom";
import useAuth from "../shared/hooks/useAuth";

function AdminRoute({ children }) {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/" />;
}

export default AdminRoute;
