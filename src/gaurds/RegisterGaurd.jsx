import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
// hooks
import useAuth from "../hooks/useAuth";

// ----------------------------------------------------------------------

RegisterGaurd.propTypes = {
  children: PropTypes.node,
};

export default function RegisterGaurd({ children }) {
  const { user } = useAuth();

  if (user?.name) {
    return <Navigate to={"/profile"} />;
  }

  return <>{children}</>;
}
