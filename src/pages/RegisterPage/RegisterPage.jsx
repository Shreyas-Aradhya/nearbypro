import ProfileForm from "../../sections/RegisterPage/RegisterForm/ProfileForm";
import RegisterForm from "../../sections/RegisterPage/RegisterForm/RegisterForm";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles["page-wrapper"]}>
      <ProfileForm />
      <br />
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
