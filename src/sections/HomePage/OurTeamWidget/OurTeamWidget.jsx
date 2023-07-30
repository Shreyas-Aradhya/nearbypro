import styles from "./OurTeamWidget.module.css";
import team1 from "/img/team1.jpg";
import team2 from "/img/team2.jpg";

import Slider from "react-slick";

const OurTeamItem = ({ photo, name, description, designation }) => {
  return (
    <div className={styles["our-team-item"]}>
      <div className={styles["photo-container"]}>
        <img src={photo} alt="team photo" />
      </div>
      <h3 className={styles["name"]}>{name}</h3>
      {/* <h4 className={styles["designation"]}>{designation}</h4> */}
      <p className={styles["description"]}>{description}</p>
    </div>
  );
};

const OurTeamWidget = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles["our-team-wrapper"]}>
      <div className="container">
        <h2 className={styles["section-title"]}>Our team</h2>
        <div className={styles["our-team-container"]}>
          {/* <div className={styles["our-team-grid"]}> */}
          <Slider {...settings}>
            <OurTeamItem
              photo={team1}
              name="Prakash"
              designation="Founder"
              description="The Visionary founder behind the groundbreaking LocalPRO. An visionary leader driving
              transformation in the On-Demand Service industry, With an impressive 15+ years of experience in the
              on-demand service industry."
            />
            <OurTeamItem
              photo={team2}
              name="Basavaraj R"
              designation="CTO"
              description="With an impressive 7+ years of experience in the field of technology, brings invaluable
              expertise and innovation to the development and growth of the app. With a deep understanding of
              software architecture, mobile app frameworks, and emerging technologies, he leads our talented team
              of developers in creating a robust and cutting-edge solution."
            />
            <OurTeamItem
              photo={team1}
              name="Anil Kumar HR"
              designation="Marketing Manager"
              description="With years of experience in the industry, He brings a wealth of knowledge in
              developing effective marketing strategies to create brand awareness
              and drive user acquisition. His expertise lies in understanding customer behavior, market trends, and
              utilizing various marketing channels to maximize reach and impact."
            />
            <OurTeamItem
              photo={team2}
              name="Naveen Kumar GV"
              designation="Creative Director"
              description="Introducing Naveen Kumar GV, our talented Creative Director responsible for
              crafting captivating and visually stunning content for the [App Name] website. With a keen eye for
              design and a passion for creating immersive user experiences, Naveen brings a wealth of creativity
              and expertise to our digital platform."
            />
          </Slider>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default OurTeamWidget;
