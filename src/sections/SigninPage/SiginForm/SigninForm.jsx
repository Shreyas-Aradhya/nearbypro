import styles from "./SigninForm.module.css";
import indiaFlag from "/img/india-flag-icon.png";
// react
import { useContext, useState } from "react";
// mui
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
// context
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const { requestOtp, verifyOtp } = useContext(AuthContext);

  const handleRequestOtp = async () => {
    try {
      const otp = await requestOtp(mobileNumber);
      setOtpSent(true);
      // setOtp(otp);
      alert(`Your otp is ${otp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await verifyOtp(otp, mobileNumber);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <form className={styles["signin-form"]} onSubmit={handleLogin}>
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
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </Stack>
        {!otpSent && (
          <Stack>
            <Button variant="contained" onClick={handleRequestOtp}>
              Request OTP
            </Button>
          </Stack>
        )}
        {otpSent && (
          <>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <label htmlFor="otp">Enter OTP</label>
              <TextField
                id="otp"
                sx={{ ...textfieldStyles }}
                variant="outlined"
                size="small"
                type="password"
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       <p>Resend (45sec)</p>
                //     </InputAdornment>
                //   ),
                // }}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Stack>
            <Stack>
              <Button variant="contained" type="submit">
                SIGN IN
              </Button>
            </Stack>
          </>
        )}
      </form>
    </div>
  );
};
export default SigninForm;
