import styles from "./StatsWidget.module.css";

const StatsItem = ({ count, title }) => {
  return (
    <div className={styles["stats-item"]}>
      <h3 className={styles["stats-count"]}>{count}</h3>
      <p className={styles["stats-title"]}>{title}</p>
    </div>
  );
};

const StatsWidget = () => {
  return (
    <div className={styles["stats-wrapper"]}>
      <div className="container">
        <div className={styles["stats-container"]}>
          <StatsItem count="30+ M" title="Happy Users" />
          <StatsItem count="200+ K" title="Verified experts" />
          <StatsItem count="200+" title="Categories" />
        </div>
      </div>
    </div>
  );
};
export default StatsWidget;
