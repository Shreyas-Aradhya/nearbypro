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
// hooks
import { useCountdown } from "../../../hooks/useCountdown";
// react-otp-input
import OtpInput from "react-otp-input";

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

const TimerDisplay = ({ setShowTimer, timerValue }) => {
  const { seconds } = useCountdown(timerValue);
  if (seconds < 0) {
    setShowTimer(false);
  }
  return <small>Resend ({seconds})</small>;
};

const SigninForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberErr, setMobileNumberErr] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpErr, setOtpErr] = useState("");
  const [otpCount, setOtpCount] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [timerValue, setTimerValue] = useState(
    new Date().setSeconds(new Date().getSeconds() + 30)
  );

  const navigate = useNavigate();

  const { requestOtp, verifyOtp } = useContext(AuthContext);

  const handleRequestOtp = async () => {
    try {
      let numberPattern = /^[6-9]\d{9}$/;
      if (!mobileNumber.length > 0) throw new Error("Enter mobile number");
      if (!numberPattern.test(mobileNumber))
        throw new Error("Invalid mobile number");
      const otp = await requestOtp(mobileNumber);
      setOtpSent(true);
      if (otpCount < 4) {
        setShowTimer(true);
        setOtpCount((prev) => prev + 1);
        setTimerValue(new Date().setSeconds(new Date().getSeconds() + 30));
      }
      setMobileNumberErr("");
      alert(`Your otp is ${otp}`);
    } catch (error) {
      console.log(error.message);
      setMobileNumberErr(error.message);
    }
  };

  const handleNumberChange = () => {
    setOtpSent(false);
    setOtp("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!otp.length > 0) throw new Error("Enter OTP!!");
      await verifyOtp(otp, mobileNumber);
      setOtpErr("");
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
      setOtpErr(error.message);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <form className={styles["signin-form"]} onSubmit={handleLogin}>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <label htmlFor="mobile-number">Mobile Number</label>
          <TextField
            id="mobile-number"
            error={mobileNumberErr.length > 0}
            helperText={mobileNumberErr}
            sx={{ ...textfieldStyles }}
            variant="outlined"
            disabled={otpSent}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CountryCode />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    size="small"
                    onClick={handleNumberChange}
                    sx={{
                      textTransform: "capitalize",
                      visibility: otpSent ? "visible" : "hidden",
                    }}
                  >
                    change number
                  </Button>
                </InputAdornment>
              ),
            }}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </Stack>
        {!otpSent && (
          <Stack>
            <Button variant="contained" size="large" onClick={handleRequestOtp}>
              Request OTP
            </Button>
          </Stack>
        )}
        {otpSent && (
          <>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <label htmlFor="otp">Enter OTP</label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                // renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                containerStyle={{ gap: "3rem" }}
                inputStyle={{
                  flex: 1,
                  aspectRatio: "1/1",
                  border: "1px solid",
                  borderColor: otpErr.length > 0 ? "red" : "#077BC1",
                  borderRadius: "4px",
                }}
              />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={
                  otpErr.length > 0 ? "space-between" : "flex-end"
                }
              >
                {otpErr.length > 0 && (
                  <small style={{ color: "red" }}>{otpErr}</small>
                )}
                {showTimer ? (
                  <TimerDisplay
                    setShowTimer={setShowTimer}
                    timerValue={timerValue}
                  />
                ) : (
                  <Button
                    size="small"
                    sx={{ textTransform: "capitalize" }}
                    onClick={handleRequestOtp}
                    disabled={otpCount >= 4}
                  >
                    Resend OTP
                  </Button>
                )}
              </Stack>
            </Stack>
            <Stack>
              <Button variant="contained" size="large" type="submit">
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
