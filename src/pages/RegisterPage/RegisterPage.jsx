import RegisterForm from "../../sections/RegisterPage/RegisterForm/RegisterForm";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles["page-wrapper"]}>
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
