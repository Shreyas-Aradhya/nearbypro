import { useEffect } from "react";

import Navbar from "../../layout/nav/Navbar";

import ProfileForm from "../../sections/RegisterPage/ProfileForm";
import RegisterForm from "../../sections/RegisterPage/RegisterForm/RegisterForm";
import styles from "./RegisterPage.module.css";

import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Profile | Nearby-pro</title>
        <meta
          name="description"
          content="FREE LIST YOUR BUSINESS ON NEARBY PRO"
        />
      </Helmet>
      <div className={styles["page-container"]}>
        <div className="nav-header">
          <Navbar color="dark" logoOnly={true} />
        </div>
        <div className={styles["signin-img-container"]}></div>
        <div className={styles["signin-form-container"]}>
          <div className={styles["signin-form-wrapper"]}>
            <h1 className={styles["form-title"]}>Fill Your Personal Details</h1>
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
