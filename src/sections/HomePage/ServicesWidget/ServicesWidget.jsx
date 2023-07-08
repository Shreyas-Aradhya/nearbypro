import styles from "./ServicesWidget.module.css";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import getCategories from "../../../services/getCategories";

const ServiceItem = ({ icon, title, subCategories }) => {
  return (
    <Link to={`/category/${title}`} state={{ subCategories }}>
      <div className={styles["service-item"]}>
        <div className={styles["service-icon-container"]}>
          <img src={icon} alt="category-icon" />
        </div>
        <h5 className={styles["service-title"]}>{title}</h5>
      </div>
    </Link>
  );
};

const ServicesWidget = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles["services-widget-wrapper"]}>
      <div className="container">
        <div className={styles["services-grid"]}>
          {categories?.map((category, index) => (
            <ServiceItem
              key={index}
              title={category?.name}
              icon={category?.image}
              subCategories={category?.subCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesWidget;
