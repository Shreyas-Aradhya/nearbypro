import styles from "./ServicesWidget.module.css";

const ServiceItem = ({ icon, title }) => {
  return (
    <div className={styles["service-item"]}>
      <div className={styles["service-icon-container"]}>
        <img src={icon} alt="category-icon" />
      </div>
      <h5 className={styles["service-title"]}>{title}</h5>
    </div>
  );
};

const SubCategoriesWidget = ({ subCategories }) => {
  return (
    <div className={styles["services-widget-wrapper"]}>
      <div className="container">
        <div className={styles["services-grid"]}>
          {subCategories?.map((subCategory, index) => (
            <ServiceItem
              key={index}
              title={subCategory.name}
              icon={subCategory.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SubCategoriesWidget;
