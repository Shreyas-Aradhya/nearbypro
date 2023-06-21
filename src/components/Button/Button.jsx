import styles from "./Button.module.css";

const getClassName = (key) => {
  switch (key) {
    case "primary":
      return "btn-primary";
    case "secondary":
      return "btn-secondary";
    case "profile":
      return "btn-profile";
    default:
      break;
  }
};
const Button = ({ children, variant, ...others }) => {
  return (
    <button
      className={`${styles[getClassName(variant)]} ${styles.btn}`}
      {...others}
    >
      {children}
    </button>
  );
};
export default Button;
