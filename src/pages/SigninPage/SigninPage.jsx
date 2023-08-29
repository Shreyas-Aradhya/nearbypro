import { useEffect } from "react";

import Navbar from "../../layout/nav/Navbar";

import SigninForm from "../../sections/SigninPage/SigninForm/SigninForm";
import styles from "./SigninPage.module.css";
import back_icon from "/icons/back-icon.svg";

import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

const SigninPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Signin - Signup | Nearby-pro</title>
        <meta
          name="description"
          content="FREE LIST YOUR BUSINESS ON NEARBY PRO"
        />
      </Helmet>
      <div className={styles["page-container"]}>
        <div className="nav-header desktop-only">
          <Navbar color="dark" logoOnly={true} />
        </div>
        <div className={`mobile-only ${styles["back-button-container"]}`}>
          <Link to="/" className={styles["back-icon-btn"]}>
            <img
              src={back_icon}
              alt="back btn"
              className={styles["back-icon"]}
            />
          </Link>
        </div>
        <div className={styles["signin-img-container"]}></div>
        <div className={styles["signin-form-container"]}>
          <div className={styles["signin-form-wrapper"]}>
            <div className={styles["form-header"]}>
              {/* <Link to="/">
                <button className="close-btn"></button>
              </Link> */}
              <div className={`mobile-only ${styles["back-button-container"]}`}>
                <Link to="/" className={styles["back-icon-btn"]}>
                  <img
                    src={back_icon}
                    alt="back btn"
                    className={styles["back-icon"]}
                  />
                </Link>
              </div>
              <div className={styles["form-title-container"]}>
                <h1 className={styles["form-title"]}>Signin / Signup</h1>
                <div className={styles["blue-dot"]}></div>
              </div>
              <p className={styles["subtitle"]}>List your business for free</p>
            </div>
            <SigninForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default SigninPage;
