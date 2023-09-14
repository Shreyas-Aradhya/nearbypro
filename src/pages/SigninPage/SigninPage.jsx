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
        <title>Signin - Signup | Local Pro</title>
        <meta
          name="description"
          content="Join Local Pro Partners and amplify your presence in the local service industry. Collaborate with like-minded professionals, gain visibility, and build trust among customers. Leverage our platform's marketing support, seamless integration, and flexible solutions to grow your business. Start your journey to success today!"
        />
        <meta
          name="keywords"
          content="Local Service Industry Partners, Collaborative Service Professionals, Local Business Networking, Grow Your Local Business, Service Provider Collaboration, Partner Program for Service Experts, Boost Visibility Locally, Trustworthy Local Service Providers, Local Business Marketing Support, Seamless Integration for Service Professionals, Customize Your Service Profile, Local Service Industry Community, Expand Your Local Client Base, Marketing Resources for Small Businesses, Local Pro Partner Benefits, Join the Local Pro Network, Success in the Service Industry, Local Service Expertise, Customer Trust Building, Local Pro Partnerships"
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
