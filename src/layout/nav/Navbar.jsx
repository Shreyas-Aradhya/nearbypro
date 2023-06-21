import styles from "./Navbar.module.css";
import nearbyLogo from "/img/nearby-pro-logo.png";

import { useState } from "react";

const Navbar = () => {
  const [buttonActive, setButtonActive] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles["nav-container"]}>
          <div className={styles["logo-container"]}>
            <a href="/">
              <img src={nearbyLogo} alt="nearby-pro logo" />
            </a>
          </div>
          <div className={styles["nav-group"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <a href="/register">Free Listing</a>
              </li>
              <li className={styles["nav-item"]}>
                <a href="/signin">Login/Register</a>
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
              <li className={styles["nav-item"]}>Free Listing</li>
              <li className={styles["nav-item"]}>Login/Register</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
