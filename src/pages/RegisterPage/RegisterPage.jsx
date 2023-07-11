import Navbar from "../../layout/nav/Navbar";

import ProfileForm from "../../sections/RegisterPage/RegisterForm/ProfileForm";
import RegisterForm from "../../sections/RegisterPage/RegisterForm/RegisterForm";
import styles from "./RegisterPage.module.css";

import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Profile | Nearby-pro</title>
        <meta
          name="description"
          content="FREE LIST YOUR BUSINESS ON NEARBY PRO"
        />
      </Helmet>
      <div className="header">
        <Navbar color="dark" />
      </div>
      <div className={styles["page-wrapper"]}>
        <ProfileForm />
        <br />
        <RegisterForm />
      </div>
    </>
  );
};
export default RegisterPage;
