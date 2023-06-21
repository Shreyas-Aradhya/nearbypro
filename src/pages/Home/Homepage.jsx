import HeroBanner from "../../sections/HomePage/HeroBanner/HeroBanner";
import OurTeamWidget from "../../sections/HomePage/OurTeamWidget/OurTeamWidget";
import RegisterWidget from "../../sections/HomePage/RegisterWidget/RegisterWidget";
import ServicesWidget from "../../sections/HomePage/ServicesWidget/ServicesWidget";
import StatsWidget from "../../sections/HomePage/StatsWidget/StatsWidget";
import TwoColumnAbout from "../../sections/HomePage/TwoColumnAbout/TwoColumnAbout";

const Homepage = () => {
  return (
    <div>
      <HeroBanner />
      <StatsWidget />
      <ServicesWidget />
      <TwoColumnAbout />
      <RegisterWidget />
      <OurTeamWidget />
    </div>
  );
};

export default Homepage;
