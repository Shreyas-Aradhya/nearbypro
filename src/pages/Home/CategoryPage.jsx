import Navbar from "../../layout/nav/Navbar";

import HeroBanner from "../../sections/HomePage/HeroBanner/HeroBanner";
import OurTeamWidget from "../../sections/HomePage/OurTeamWidget/OurTeamWidget";
import RegisterWidget from "../../sections/HomePage/RegisterWidget/RegisterWidget";
import ServicesWidget from "../../sections/HomePage/ServicesWidget/ServicesWidget";
import StatsWidget from "../../sections/HomePage/StatsWidget/StatsWidget";
import TwoColumnAbout from "../../sections/HomePage/TwoColumnAbout/TwoColumnAbout";
import SubCategoriesWidget from "../../sections/HomePage/ServicesWidget/SubCategoriesWidget";

import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CategoryPage = () => {
  const location = useLocation();
  let { name } = useParams();
  console.log(location?.state);
  return (
    <div>
      <Helmet>
        <title>{location?.state?.metaTitle || `${name} | Nearby-pro`}</title>
        <meta
          name="description"
          content={location?.state?.metaDescription || `${name} on nearby pro`}
        />
      </Helmet>
      <div className="header">
        <header className="nav-header">
          <Navbar />
        </header>
        <HeroBanner title={name} banner={location?.state?.banner} />
      </div>
      <StatsWidget />
      {!name && <ServicesWidget />}
      {location?.state?.subCategories?.length > 0 && (
        <SubCategoriesWidget subCategories={location?.state?.subCategories} />
      )}
      <TwoColumnAbout />
      <RegisterWidget />
      <OurTeamWidget />
    </div>
  );
};

export default CategoryPage;
