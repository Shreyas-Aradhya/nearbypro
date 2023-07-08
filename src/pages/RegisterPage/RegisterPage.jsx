import ProfileForm from "../../sections/RegisterPage/RegisterForm/ProfileForm";
import RegisterForm from "../../sections/RegisterPage/RegisterForm/RegisterForm";
import styles from "./RegisterPage.module.css";

import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  return (
    <div className={styles["page-wrapper"]}>
      <Helmet>
        <title>Profile | Nearby-pro</title>
        <meta
          name="description"
          content="FREE LIST YOUR BUSINESS ON NEARBY PRO"
        />
      </Helmet>
      <ProfileForm />
      <br />
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
