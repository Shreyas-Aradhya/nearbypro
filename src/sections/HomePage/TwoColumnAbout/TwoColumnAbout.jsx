import { Link } from "react-router-dom";
import styles from "./TwoColumnAbout.module.css";
import welcome from "/img/welcome.jpg";
import becoming_local_partner from "/img/becoming-local-partner.jpg";
import partner_network from "/img/partner-network.jpg";

const ContentRow = ({ title, text, img, alt, listTitle, listItems }) => {
  return (
    <div className={styles["content-row"]}>
      <div className={styles["img-container"]}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["content-title"]}>
          <h3>{title}</h3>
        </div>
        <div className={styles["content-txt"]}>
          {typeof text === "Array" ? (
            text?.map((p, index) => <p key={index}>{p}</p>)
          ) : (
            <p>{text}</p>
          )}
          {listTitle && <h4>{listTitle}</h4>}
          {listItems && (
            <ul>
              {listItems?.map((listItem, index) => (
                <li key={index}>
                  {listItem?.subHeading && <b>{listItem?.subHeading} : </b>}{" "}
                  {listItem?.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const TwoColumnAbout = ({ sections }) => {
  return (
    <div className={styles["two-column-container"]}>
      <div className="container">
        <h2 className={styles["section-title"]}>What We Do</h2>
      </div>
      <div className="container-xl">
        {sections ? (
          sections.map((section, index) => (
            <ContentRow
              key={index}
              img={section?.image}
              title={section?.title}
              text={section?.description}
            />
          ))
        ) : (
          <>
            <ContentRow
              img={welcome}
              alt="welcome-image"
              title="Welcome to Local Pro Partners"
              text={[
                `At Local Pro, we believe in the power of collaboration. Our Partner Program is designed to bring together like-minded businesses and professionals to create mutually beneficial relationships and drive success in the local service industry.`,
              ]}
              listTitle="Why Partner with Local Pro?"
              listItems={[
                {
                  subHeading: "Increased Visibility",
                  text: "Joining forces with Local Pro means expanding your reach to a broader audience. Gain exposure to potential customers actively seeking local services in your area",
                },
                {
                  subHeading: "Customer Trust",
                  text: "Local Pro has built a reputation for connecting customers with reliable service providers. Partnering with us can enhance your credibility and build trust among your target audience.",
                },
                {
                  subHeading: "Seamless Integration",
                  text: "Our platform is designed for easy integration with your business operations. Effortlessly list your services, manage bookings, and engage with customers through our user-friendly interface.",
                },
                {
                  subHeading: "Marketing Support",
                  text: "We offer marketing resources and tools to help you promote your services effectively. Leverage our platform to attract new customers and grow your client base.",
                },
                {
                  subHeading: "Flexibility",
                  text: "Whether you're an individual service provider or a small business owner, our Partner Program is adaptable to your unique needs. Customize your profile and services to stand out in the crowd.",
                },
              ]}
            />
            <ContentRow
              img={becoming_local_partner}
              alt="becoming-local-partner-image"
              title="Becoming a Local Pro Partner"
              listTitle="Getting started is simple:"
              listItems={[
                {
                  subHeading: "Create Your Profile",
                  text: "Sign up and create your profile. Share details about your services, expertise, pricing, and service area.",
                },
                {
                  subHeading: "Connect with Customers",
                  text: "Receive direct inquiries and bookings from customers in your local area. Engage with them seamlessly through our platform.",
                },
                {
                  subHeading: "Grow Your Business",
                  text: "Benefit from increased exposure, customer reviews, and marketing support to help your business thrive.",
                },
                {
                  subHeading: "Partner Benefits",
                  text: "Enjoy exclusive benefits, such as access to data insights, marketing resources, and promotional opportunities to boost your visibility.",
                },
              ]}
            />
            <div className={styles["content-row"]}>
              <div className={styles["img-container"]}>
                <img src={partner_network} alt="partner-network-image" />
              </div>
              <div className={styles["content-container"]}>
                <div className={styles["content-title"]}>
                  <h3>Join the Local Pro Partner Network</h3>
                </div>
                <div className={styles["content-txt"]}>
                  <p>
                    Don't miss out on the opportunity to grow your business and
                    connect with a community of service professionals who share
                    your commitment to excellence. Join Local Pro Partners today
                    and be part of a network that believes in the power of local
                    services.
                  </p>
                  <p>
                    Ready to get started?{" "}
                    <Link
                      to="/register"
                      style={{ color: "#FF9324", textDecoration: "underline" }}
                    >
                      Sign up now
                    </Link>{" "}
                    and unlock the full potential of your business with Local
                    Pro! Feel free to customize this content to align with your
                    specific Partner Program's goals, benefits, and branding.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default TwoColumnAbout;
