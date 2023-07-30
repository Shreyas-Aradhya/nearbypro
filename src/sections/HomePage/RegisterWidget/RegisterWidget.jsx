import styles from "./RegisterWidget.module.css";
import Button from "../../../components/Button/Button";

import { Link } from "react-router-dom";

const RegisterWidget = () => {
  return (
    <div className={styles["register-container"]}>
      <div className="container">
        <div className={styles["cta-container"]}>
          <h2 className={styles["title"]}>Register your business here</h2>
          <Link to="/profile">
            <Button variant={"secondary"} className={styles["register-cta"]}>
              Click here to register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RegisterWidget;
