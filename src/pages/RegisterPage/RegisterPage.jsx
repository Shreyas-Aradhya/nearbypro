import { useState, useEffect } from "react";

import Navbar from "../../layout/nav/Navbar";

import ProfileForm from "../../sections/RegisterPage/ProfileForm";
import styles from "./RegisterPage.module.css";

import { Helmet } from "react-helmet-async";
import BusinessNameForm from "../../sections/RegisterPage/BusinessNameForm";
import { Box } from "@mui/material";
import BusinessDetailsForm from "../../sections/RegisterPage/BusinessDetailsForm";
import BusinessAboutImgForm from "../../sections/RegisterPage/BusinessAboutImgForm";
import RegisterSuccess from "../../sections/RegisterPage/RegisterSuccess";

import { Link } from "react-router-dom";

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currForm, setCurrForm] = useState(0);

  return (
    <>
      <Helmet>
        <title>Register | Nearby-pro</title>
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
            {currForm === 0 && (
              <Box sx={{ width: "100%" }}>
                <ProfileForm setCurrForm={setCurrForm} />
              </Box>
            )}
            {currForm === 1 && (
              <Box sx={{ width: "100%" }}>
                <BusinessNameForm setCurrForm={setCurrForm} />
              </Box>
            )}
            {currForm === 2 && (
              <Box sx={{ width: "100%" }}>
                <BusinessDetailsForm setCurrForm={setCurrForm} />
              </Box>
            )}
            {currForm === 3 && (
              <Box sx={{ width: "100%" }}>
                <BusinessAboutImgForm setCurrForm={setCurrForm} />
              </Box>
            )}
            {currForm === 4 && (
              <Box sx={{ width: "100%" }}>
                <RegisterSuccess />
              </Box>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
