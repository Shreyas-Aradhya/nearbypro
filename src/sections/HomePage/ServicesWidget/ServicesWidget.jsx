import styles from "./ServicesWidget.module.css";

const ServiceItem = ({ icon, title }) => {
  return (
    <div className={styles["service-item"]}>
      <div className={styles["service-icon-container"]}></div>
      <h5 className={styles["service-title"]}>{title}</h5>
    </div>
  );
};

const ServicesWidget = () => {
  return (
    <div className={styles["services-widget-wrapper"]}>
      <div className="container">
        <div className={styles["services-grid"]}>
          <ServiceItem title="Home Appliances" />
          <ServiceItem title="Kitchen Appliances" />
          <ServiceItem title="Home Maintenance" />
          <ServiceItem title="Cleaning Services" />
          <ServiceItem title="Automobile Services" />
          <ServiceItem title="Photography Services" />
          <ServiceItem title="Events" />
          <ServiceItem title="Sports & Fitness" />
          <ServiceItem title="Laundry Services" />
          <ServiceItem title="Document Services" />
          <ServiceItem title="Tutions" />
          <ServiceItem title="More" />
        </div>
      </div>
    </div>
  );
};
export default ServicesWidget;
