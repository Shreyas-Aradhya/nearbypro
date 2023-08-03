import styles from "./RegisterForm.module.css";
import success_icon from "/img/success.png";

import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <div className={styles["success-page-container"]}>
      <div className={styles["success_msg_container"]} spacing={3}>
        <img
          className={styles["success_img"]}
          src={success_icon}
          alt="success"
        />
        <h2 className={styles["success_msg"]}>Registration Success</h2>
      </div>
      <Link to="/profile">
        <p className={styles["profile-link"]}>Review Profile Page</p>
      </Link>
    </div>
  );
};
export default RegisterSuccess;
