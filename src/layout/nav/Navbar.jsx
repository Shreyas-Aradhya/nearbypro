import styles from "./Navbar.module.css";
import nearbyLogo from "/img/nearby-pro-logo.png";
// hooks
import useAuth from "../../hooks/useAuth";

import { useState } from "react";

import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles["nav-container"]}>
          <div className={styles["logo-container"]}>
            <NavLink to="/">
              <img src={nearbyLogo} alt="nearby-pro logo" />
            </NavLink>
          </div>
          <div className={styles["nav-group"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                {!isAuthenticated ? (
                  <NavLink to="/register">Free Listing</NavLink>
                ) : (
                  <NavLink to="/profile">Profile</NavLink>
                )}
              </li>
              <li className={styles["nav-item"]}>
                {!isAuthenticated ? (
                  <NavLink to="/signin">Login/Register</NavLink>
                ) : (
                  <Button onClick={logout}>Logout</Button>
                )}
              </li>
            </ul>
          </div>
          <button
            onClick={() => setButtonActive((prev) => !prev)}
            className={`${styles["nav-btn"]} ${
              buttonActive && styles["active"]
            }`}
          ></button>
          <div
            className={`${styles["nav-group-mobile"]} ${
              buttonActive && styles["show"]
            }`}
          >
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                {!isAuthenticated ? (
                  <NavLink to="/register">Free Listing</NavLink>
                ) : (
                  <NavLink to="/profile">Profile</NavLink>
                )}
              </li>
              <li className={styles["nav-item"]}>
                {!isAuthenticated ? (
                  <NavLink to="/signin">Login/Register</NavLink>
                ) : (
                  <button onClick={logout}>Logout</button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
