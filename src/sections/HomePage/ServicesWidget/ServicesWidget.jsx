import styles from "./ServicesWidget.module.css";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import getCategories from "../../../services/getCategories";

const ServiceItem = ({
  id,
  icon,
  title,
  banner,
  description,
  metaTitle,
  metaDescription,
  sections,
}) => {
  return (
    <Link
      to={`/category/${title.toLowerCase().replace(/ /g, "_")}`}
      state={{
        title,
        banner,
        description,
        metaTitle,
        metaDescription,
        id,
        sections,
      }}
    >
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
        const data = await getCategories({});
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles["services-widget-wrapper"]}>
      <div className="container-xl">
        <div className={styles["services-grid"]}>
          {categories?.map(
            (category, index) =>
              category?.status === true && (
                <ServiceItem
                  key={index}
                  title={category?.name}
                  icon={category?.image}
                  id={category?.id}
                  banner={category?.banner}
                  sections={category?.sections}
                  metaTitle={category?.meta_title}
                  metaDescription={category?.meta_description}
                  description={category?.description}
                />
              )
          )}
          {/* <ServiceItem
            title={"Automobiles Applications"}
            icon="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png"
            subCategories={[]}
          /> */}
        </div>
      </div>
    </div>
  );
};
export default ServicesWidget;
