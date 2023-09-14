import { useEffect } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
// hooks
import useAuth from "../hooks/useAuth";

// ----------------------------------------------------------------------

RegisterGaurd.propTypes = {
  children: PropTypes.node,
};

export default function RegisterGaurd({ children }) {
  const { user, vendor } = useAuth();

  if (user?.is_registered && vendor?.bname) {
    return <Navigate to={"/profile"} />;
  }

  // if (user?.is_registered && !vendor?.bname) {
  //   return <Navigate to={"/register"} state={{ currForm: 2 }} />;
  // }

  return <>{children}</>;
}
