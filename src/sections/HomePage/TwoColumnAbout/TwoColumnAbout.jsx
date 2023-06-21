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
          <p>{text}</p>
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
          title="Authentic local news"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                necessitatibus culpa fugit quasi. Minima numquam illo aut
                eligendi? Aliquid porro rerum illum laudantium numquam iste, quo
                explicabo fugiat necessitatibus, tempore obcaecati harum
                asperiores nihil adipisci excepturi et? Soluta amet consequuntur
                quam molestias! Quam similique in id nihil sapiente sunt eaque."
        />
        <ContentRow
          img={img1}
          title="Authentic local news"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                necessitatibus culpa fugit quasi. Minima numquam illo aut
                eligendi? Aliquid porro rerum illum laudantium numquam iste, quo
                explicabo fugiat necessitatibus, tempore obcaecati harum
                asperiores nihil adipisci excepturi et? Soluta amet consequuntur
                quam molestias! Quam similique in id nihil sapiente sunt eaque."
        />
        <ContentRow
          img={img1}
          title="Authentic local news"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                necessitatibus culpa fugit quasi. Minima numquam illo aut
                eligendi? Aliquid porro rerum illum laudantium numquam iste, quo
                explicabo fugiat necessitatibus, tempore obcaecati harum
                asperiores nihil adipisci excepturi et? Soluta amet consequuntur
                quam molestias! Quam similique in id nihil sapiente sunt eaque."
        />
      </div>
    </div>
  );
};
export default TwoColumnAbout;
