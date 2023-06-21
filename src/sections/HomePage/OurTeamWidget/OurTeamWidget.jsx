import styles from "./OurTeamWidget.module.css";
import team1 from "/img/team1.jpg";
import team2 from "/img/team2.jpg";

const OurTeamItem = ({ photo, name, description }) => {
  return (
    <div className={styles["our-team-item"]}>
      <div className={styles["photo-container"]}>
        <img src={photo} alt="team photo" />
      </div>
      <h3 className={styles["name"]}>{name}</h3>
      <p className={styles["description"]}>{description}</p>
    </div>
  );
};

const OurTeamWidget = () => {
  return (
    <div className={styles["our-team-wrapper"]}>
      <div className="container">
        <h2 className={styles["section-title"]}>Our team</h2>
        <div className={styles["our-team-container"]}>
          <div className={styles["our-team-grid"]}>
            <OurTeamItem
              photo={team1}
              name="Prakash"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at fuga mollitia."
            />
            <OurTeamItem
              photo={team2}
              name="Prakash"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at fuga mollitia."
            />
            <OurTeamItem
              photo={team1}
              name="Prakash"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at fuga mollitia."
            />
            <OurTeamItem
              photo={team2}
              name="Prakash"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at fuga mollitia."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurTeamWidget;
