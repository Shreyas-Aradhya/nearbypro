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

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currForm, setCurrForm] = useState(0);

  return (
    <>
      <Helmet>
        <title>Register | Local Pro</title>
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
