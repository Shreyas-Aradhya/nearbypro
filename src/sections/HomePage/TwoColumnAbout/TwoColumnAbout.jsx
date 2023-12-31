import styles from "./TwoColumnAbout.module.css";
import img1 from "/img/img-1.jpg";

const ContentRow = ({ title, text, img }) => {
  return (
    <div className={styles["content-row"]}>
      <div className={styles["img-container"]}>
        <img src={img} alt="img-1" />
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["content-title"]}>
          <h3>{title}</h3>
        </div>
        <div className={styles["content-txt"]}>
          {text?.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const TwoColumnAbout = () => {
  return (
    <div className={styles["two-column-container"]}>
      <div className="container">
        <h2 className={styles["section-title"]}>What we do</h2>
      </div>
      <div className="container-xl">
        <ContentRow
          img={img1}
          title="LocalPRO"
          text={[
            `Introducing LocalPRO, your trusted companion for all your home service needs! Developed by a team
          of four experts with over 8+ years of experience in the on-demand home service industry, our app is
          designed to make your life easier and more convenient.`,
            `With Local Pro, you can effortlessly book a wide range of home services right from your smartphone.
          Whether you need a plumber, electrician, cleaner, gardener, or handyman, we've got you covered.
          Our team of highly skilled and reliable professionals is ready to tackle any task, big or small.`,
          ]}
        />
        <ContentRow
          img={img1}
          title="How it works"
          text={[
            `As a local professional, you can create a comprehensive business profile on our platform for free.
            Highlight your expertise, showcase previous work, and provide relevant details about your services.
            This profile acts as your digital business card, enabling customers to learn more about you.
            LocalPRO connects you directly with customers who are actively seeking your expertise, boosting
            your visibility and expanding your customer base. Maximize your earning potential and grow your
            business with our user-friendly platform.`,
          ]}
        />
        <ContentRow
          img={img1}
          title="Customer Location-Based Listings"
          text={[
            `When customers open LocalPRO, they can view a list of local professionals based on their current
            location. This feature ensures that customers find service providers who operate in their vicinity,
            promoting convenience and minimizing travel time.`,
          ]}
        />
      </div>
    </div>
  );
};
export default TwoColumnAbout;
