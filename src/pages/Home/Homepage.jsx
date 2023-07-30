import Navbar from "../../layout/nav/Navbar";
import HeroBanner from "../../sections/HomePage/HeroBanner/HeroBanner";
import OurTeamWidget from "../../sections/HomePage/OurTeamWidget/OurTeamWidget";
import RegisterWidget from "../../sections/HomePage/RegisterWidget/RegisterWidget";
import ServicesWidget from "../../sections/HomePage/ServicesWidget/ServicesWidget";
import StatsWidget from "../../sections/HomePage/StatsWidget/StatsWidget";
import TwoColumnAbout from "../../sections/HomePage/TwoColumnAbout/TwoColumnAbout";

import { Helmet } from "react-helmet-async";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Nearby-pro</title>
        <meta
          name="description"
          content="FREE LIST YOUR BUSINESS ON NEARBY PRO"
        />
      </Helmet>
      <div className="header">
        <header className="nav-header">
          <Navbar />
        </header>
        <HeroBanner />
      </div>
      <StatsWidget />
      <ServicesWidget />
      <TwoColumnAbout />
      <OurTeamWidget />
      <RegisterWidget />
    </div>
  );
};

export default Homepage;
