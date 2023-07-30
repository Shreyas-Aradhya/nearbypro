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
      return "btn-primary";
  }
};
const Button = ({ children, variant, className, ...others }) => {
  return (
    <button
      className={`${styles[getClassName(variant)]} ${styles.btn} ${className}`}
      {...others}
    >
      {children}
    </button>
  );
};
export default Button;
