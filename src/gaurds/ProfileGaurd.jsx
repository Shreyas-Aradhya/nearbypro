import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
// hooks
import useAuth from "../hooks/useAuth";

// ----------------------------------------------------------------------

ProfileGaurd.propTypes = {
  children: PropTypes.node,
};

export default function ProfileGaurd({ children }) {
  const { user, vendor } = useAuth();
  // if (user?.is_registered && vendor?.business?.bname) {
  if (!user?.is_registered) {
    return <Navigate to={"/register"} />;
  }

  // if (user?.is_registered && !vendor?.bname) {
  //   return <Navigate to={"/register"} state={{ currForm: 2 }} />;
  // }

  return <>{children}</>;
}
