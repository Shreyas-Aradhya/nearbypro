import styles from "./RegisterWidget.module.css";
import Button from "../../../components/Button/Button";

import { NavLink } from "react-router-dom";

const RegisterWidget = () => {
  return (
    <div className={styles["register-container"]}>
      <div className="container">
        <div className={styles["cta-container"]}>
          <h2 className={styles["title"]}>Register your business here</h2>
          <NavLink to="/profile">
            <Button variant={"secondary"}>Click here to register</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default RegisterWidget;
