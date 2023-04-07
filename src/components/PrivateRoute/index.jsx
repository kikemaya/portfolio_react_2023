import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userAuth } = useAuth();

  if (userAuth) {
    return children
  } else {
    return <Navigate replace to="/login" />
  }

};

export default PrivateRoute;
