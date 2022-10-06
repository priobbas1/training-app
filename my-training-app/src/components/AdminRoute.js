import { Navigate } from "react-router-dom";
import useAuth from "../shared/hooks/useAuth";

function AdminRoute({ children }) {
  const { isAdmin } = useAuth();
  console.log("Admin", isAdmin);
  return isAdmin ? children : <Navigate to="/" />;
}

export default AdminRoute;
