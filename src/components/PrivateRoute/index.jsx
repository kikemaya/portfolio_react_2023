import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userAuth } = useAuth();

    if (userAuth) {
        return children
    } else {
        return <Navigate replace to="/portfolio_react_2023/login"/>
    }

};

export default PrivateRoute;
