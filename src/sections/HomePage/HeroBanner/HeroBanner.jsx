import Button from "../../../components/Button/Button";
import styles from "./HeroBanner.module.css";
import locationIcon from "/icons/location-icon.svg";

import { Link } from "react-router-dom";

const HeroBanner = ({ title, banner, description }) => {
  return (
    <div
      className={styles["banner-wrapper"]}
      style={{
        backgroundImage:
          banner?.length > 0 ? `url(${banner})` : `url("/img/banner1.jpg")`,
      }}
    >
      <div className="container">
        <div className={styles["heading-container"]}>
          {/* {!title && (
            <div className={styles["heading-icon"]}>
              <img src={locationIcon} alt="location icon" />
            </div>
          )} */}
          <h2 className={styles["heading-title"]}>
            {title ? title : "Invest less Earn More.."}
          </h2>
        </div>
        {!title && (
          <>
            <div className={styles["subtitle"]}>
              <h3>Take your local professional services to new heights!</h3>
            </div>
            <div className={styles["tagline"]}>
              Join <span className={styles["fancy-txt"]}>LocalPro</span> today
              and unleash the power of direct customer connections.
            </div>
          </>
        )}
        {description && (
          <div className={styles["subtitle"]}>
            <h3 style={{ maxWidth: "500px" }}>{description}</h3>
          </div>
        )}
        <div className={styles["cta"]}>
          <Link to="/profile">
            <Button variant="primary">List your business now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
