import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Component {...props} />;
}

export default ProtectedRoute;
