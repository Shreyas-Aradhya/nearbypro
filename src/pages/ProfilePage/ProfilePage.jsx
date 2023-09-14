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
        <title>Profile | Local Pro</title>
        <meta
          name="description"
          content="Join Local Pro Partners and amplify your presence in the local service industry. Collaborate with like-minded professionals, gain visibility, and build trust among customers. Leverage our platform's marketing support, seamless integration, and flexible solutions to grow your business. Start your journey to success today!"
        />
        <meta
          name="keywords"
          content="Local Service Industry Partners, Collaborative Service Professionals, Local Business Networking, Grow Your Local Business, Service Provider Collaboration, Partner Program for Service Experts, Boost Visibility Locally, Trustworthy Local Service Providers, Local Business Marketing Support, Seamless Integration for Service Professionals, Customize Your Service Profile, Local Service Industry Community, Expand Your Local Client Base, Marketing Resources for Small Businesses, Local Pro Partner Benefits, Join the Local Pro Network, Success in the Service Industry, Local Service Expertise, Customer Trust Building, Local Pro Partnerships"
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
