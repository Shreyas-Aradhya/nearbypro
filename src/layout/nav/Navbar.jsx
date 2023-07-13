import styles from "./Navbar.module.css";
import nearbyLogo from "/img/nearby-pro-logo.png";

import { useState } from "react";

import { NavLink } from "react-router-dom";

// mui
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// hooks
import useAuth from "../../hooks/useAuth";

const ProfileMenu = ({ open, anchorEl, handleClose }) => {
  const { logout } = useAuth();
  const handleLogout = () => {
    handleClose();
    logout();
  };
  return (
    <Menu
      sx={{ width: 320 }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      slotProps={{ paper: { sx: { width: 100 } } }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem sx={{ minHeight: "20px" }} component={NavLink} to="/profile">
        Profile
      </MenuItem>
      <MenuItem sx={{ minHeight: "20px" }} onClick={handleLogout}>
        Logout
      </MenuItem>
    </Menu>
  );
};

const Navbar = ({ color = "light", logoOnly = false }) => {
  const { isAuthenticated, user } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles["nav-container"]}>
          <NavLink to="/" className={styles["logo-container"]}>
            <img src={nearbyLogo} alt="nearby-pro logo" />
          </NavLink>
          {!logoOnly && (
            <div className={styles["nav-group"]}>
              <ul
                className={`${styles["nav-list"]} ${
                  color === "dark" && styles["dark"]
                }`}
              >
                {/* {isAuthenticated && (
                <li className={styles["nav-item"]}>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              )} */}

                {/* <li className={styles["nav-item"]}>
                {!isAuthenticated ? (
                  <NavLink to="/signin">Login/Register</NavLink>
                ) : (
                  <Button onClick={logout}>Logout</Button>
                )}
              </li> */}

                <li className={styles["nav-item"]}>
                  {!isAuthenticated ? (
                    <NavLink to="/signin">Login/Register</NavLink>
                  ) : (
                    <IconButton onClick={handleClick} size="small">
                      <Avatar
                        sx={{
                          bgcolor: "#ff9324",
                          coloe: "#ffffff",
                          width: "32px",
                          height: "32px",
                        }}
                        alt={user?.name}
                        src={user?.profilePicture}
                      />
                    </IconButton>
                  )}
                  <ProfileMenu
                    open={open}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                  />
                </li>
              </ul>
            </div>
          )}
          {/* <button
            onClick={() => setButtonActive((prev) => !prev)}
            className={`${styles["nav-btn"]} ${
              buttonActive && styles["active"]
            }`}
          ></button> */}
          {/* <div
            className={`${styles["nav-group-mobile"]} ${
              buttonActive && styles["show"]
            }`}
          >
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <NavLink to="/">Home</NavLink>
              </li>
              {isAuthenticated && (
                <li className={styles["nav-item"]}>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              )}
              <li className={styles["nav-item"]}>
                {!isAuthenticated ? (
                  <NavLink to="/signin">Login/Register</NavLink>
                ) : (
                  <button onClick={logout}>Logout</button>
                )}
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
