import styles from "./SigninForm.module.css";
import indiaFlag from "/img/india-flag-icon.png";
// mui
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

const textfieldStyles = {
  "& .MuiOutlinedInput-notchedOutline": {
    "&.Mui-focused": {
      borderColor: "#077BC1",
    },
    borderColor: "#077BC1",
  },
};

const CountryCode = () => {
  return (
    <div className={styles["country-code-container"]}>
      <img
        className={styles["country-code-img"]}
        src={indiaFlag}
        alt="India flag"
      />
      <p className={styles["country-code-txt"]}>+91</p>
    </div>
  );
};

const SigninForm = () => {
  return (
    <div className={styles["form-container"]}>
      <form className={styles["signin-form"]}>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <label htmlFor="mobile-number">Mobile Number</label>
          <TextField
            id="mobile-number"
            sx={{ ...textfieldStyles }}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CountryCode />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <label htmlFor="otp">Enter OTP</label>
          <TextField
            id="otp"
            sx={{ ...textfieldStyles }}
            variant="outlined"
            size="small"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <p>Resend (45sec)</p>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack>
          <Button variant="contained" type="submit">
            SIGN IN
          </Button>
        </Stack>
      </form>
    </div>
  );
};
export default SigninForm;
