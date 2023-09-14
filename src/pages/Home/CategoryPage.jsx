import { useEffect, useState } from "react";
import Navbar from "../../layout/nav/Navbar";

import HeroBanner from "../../sections/HomePage/HeroBanner/HeroBanner";
import OurTeamWidget from "../../sections/HomePage/OurTeamWidget/OurTeamWidget";
import RegisterWidget from "../../sections/HomePage/RegisterWidget/RegisterWidget";
import ServicesWidget from "../../sections/HomePage/ServicesWidget/ServicesWidget";
import StatsWidget from "../../sections/HomePage/StatsWidget/StatsWidget";
import TwoColumnAbout from "../../sections/HomePage/TwoColumnAbout/TwoColumnAbout";
import SubCategoriesWidget from "../../sections/HomePage/ServicesWidget/SubCategoriesWidget";

import getCategories from "../../services/getCategories";

import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CategoryPage = () => {
  const location = useLocation();

  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCategories({ parent: location?.state?.id });
        setSubCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          {location?.state?.metaTitle ||
            `${location?.state?.title} | Local Pro`}
        </title>
        <meta
          name="description"
          content={
            location?.state?.metaDescription ||
            `${location?.state?.title} on local pro`
          }
        />
        <meta
          name="keywords"
          content="Local Service Industry Partners, Collaborative Service Professionals, Local Business Networking, Grow Your Local Business, Service Provider Collaboration, Partner Program for Service Experts, Boost Visibility Locally, Trustworthy Local Service Providers, Local Business Marketing Support, Seamless Integration for Service Professionals, Customize Your Service Profile, Local Service Industry Community, Expand Your Local Client Base, Marketing Resources for Small Businesses, Local Pro Partner Benefits, Join the Local Pro Network, Success in the Service Industry, Local Service Expertise, Customer Trust Building, Local Pro Partnerships"
        />
      </Helmet>
      <div className="header">
        <header className="nav-header">
          <Navbar />
        </header>
        <HeroBanner
          title={location?.state?.title}
          description={location?.state?.description}
          banner={location?.state?.banner[0]?.url}
        />
      </div>
      <StatsWidget />
      {!location?.state?.title && <ServicesWidget />}
      {subCategories?.length > 0 && (
        <SubCategoriesWidget subCategories={subCategories} />
      )}
      {location?.state?.sections && location?.state?.sections.length > 0 && (
        <TwoColumnAbout sections={location?.state?.sections} />
      )}
      <OurTeamWidget />
      <RegisterWidget />
    </div>
  );
};

export default CategoryPage;
