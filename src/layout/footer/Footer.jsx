import styles from "./Footer.module.css";
import facebookIcon from "/icons/facebook-icon.svg";
import instagramIcon from "/icons/instagram-icon.svg";
import twitterIcon from "/icons/twitter-icon.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles["footer-container"]}>
          <p className={styles["copyright-text"]}>
            All rights reserved &copy; 2013neadrby.com
          </p>
          <ul className={styles["socials-list"]}>
            <li className={styles["social-item"]}>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="facebook icon" />
              </a>
            </li>
            <li className={styles["social-item"]}>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="instagram icon" />
              </a>
            </li>
            <li className={styles["social-item"]}>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="twitter icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
