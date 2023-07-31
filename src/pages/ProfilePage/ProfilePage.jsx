import { useEffect } from "react";

import Navbar from "../../layout/nav/Navbar";

import ProfileForm from "../../sections/ProfilePage/ProfileFrom/ProfileForm";
import styles from "./ProfilePage.module.css";

import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
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
      <div className="header">
        <Navbar color="dark" />
      </div>
      <div className={styles["page-wrapper"]}>
        <ProfileForm />
      </div>
    </>
  );
};
export default ProfilePage;
