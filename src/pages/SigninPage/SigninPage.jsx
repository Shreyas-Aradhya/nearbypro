import SigninForm from "../../sections/SigninPage/SiginForm/SigninForm";
import styles from "./SigninPage.module.css";

import { Helmet } from "react-helmet-async";

const SigninPage = () => {
  return (
    <div className={styles["page-container"]}>
      <Helmet>
        <title>Signin | Nearby-pro</title>
        <meta
          name="description"
          content="FREE LIST YOUR BUSINESS ON NEARBY PRO"
        />
      </Helmet>
      <div className={styles["signin-img-container"]}></div>
      <div className={styles["signin-form-container"]}>
        <div className={styles["signin-form-wrapper"]}>
          <div className={styles["form-header"]}>
            <div className={styles["form-title-container"]}>
              <h1 className={styles["form-title"]}>Sign In</h1>
              <div className={styles["blue-dot"]}></div>
            </div>
            <p className={styles["subtitle"]}>Login with your mobile number</p>
          </div>
          <SigninForm />
        </div>
      </div>
    </div>
  );
};
export default SigninPage;
