import styles from "./RegisterWidget.module.css";
import Button from "../../../components/Button/Button";

const RegisterWidget = () => {
  return (
    <div className={styles["register-container"]}>
      <div className="container">
        <div className={styles["cta-container"]}>
          <h2 className={styles["title"]}>Register your business here</h2>
          <a href="/register">
            <Button variant={"secondary"}>Click here to register</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default RegisterWidget;
