import Button from "../../../components/Button/Button";
import styles from "./HeroBanner.module.css";
import locationIcon from "/icons/location-icon.svg";

import { NavLink } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className={styles["banner-wrapper"]}>
      <div className="container">
        <div className={styles["heading-container"]}>
          <div className={styles["heading-icon"]}>
            <img src={locationIcon} alt="location icon" />
          </div>
          <h2 className={styles["heading-title"]}>LOCATION</h2>
        </div>
        <div className={styles["subtitle"]}>
          <h3>
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing.
          </h3>
        </div>
        <div className={styles["tagline"]}>
          <span className={styles["fancy-txt"]}>Free</span> list your business{" "}
          <br />
          on nearby pro
        </div>
        <div className={styles["cta"]}>
          <NavLink to="/profile">
            <Button variant="primary">List your business for free</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
