import HeroBanner from "../../sections/HomePage/HeroBanner/HeroBanner";
import OurTeamWidget from "../../sections/HomePage/OurTeamWidget/OurTeamWidget";
import RegisterWidget from "../../sections/HomePage/RegisterWidget/RegisterWidget";
import ServicesWidget from "../../sections/HomePage/ServicesWidget/ServicesWidget";
import StatsWidget from "../../sections/HomePage/StatsWidget/StatsWidget";
import TwoColumnAbout from "../../sections/HomePage/TwoColumnAbout/TwoColumnAbout";
import SubCategoriesWidget from "../../sections/HomePage/ServicesWidget/SubCategoriesWidget";

import { useParams, useLocation } from "react-router-dom";

const CategoryPage = () => {
  const location = useLocation();
  let { name } = useParams();
  console.log(location?.state?.subCategories);
  return (
    <div>
      <HeroBanner title={name} />
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
