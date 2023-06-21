import styles from "./RegisterForm.module.css";
import profileImg from "/img/profile-icon.png";

// mui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import indiaFlag from "/img/india-flag-icon.png";
// mui
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

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

const RegisterForm = () => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "800px",
        borderRadius: "10px",
      }}
    >
      <form className={styles["register-form"]}>
        <div className={styles["form-wrapper"]}>
          {/*  */}

          <div className={styles["form-section"]} style={{ paddingTop: 0 }}>
            <h2 className={styles["form-group-heading"]}>Profile Details</h2>
            <div className={styles["register-icon-container"]}>
              <div className={styles["profile-group"]}>
                <img
                  src={profileImg}
                  alt="profile image"
                  className={styles["register-icon"]}
                />
                <button className={styles["edit-icon-btn"]}></button>
              </div>
            </div>
            <div className={styles["form-group"]}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="name">Name</label>
                <TextField
                  id="name"
                  sx={{ ...textfieldStyles }}
                  variant="outlined"
                />
              </Stack>
            </div>
            <div className={styles["form-group"]}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="mobile-number">Mobile Number</label>
                <Box>
                  <TextField
                    fullWidth
                    id="mobile-number"
                    sx={{ ...textfieldStyles }}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CountryCode />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormGroup
                    sx={{ border: "1px solid #077BC1", borderTop: "none" }}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <p style={{ paddingLeft: "10px" }}>
                        Is this your WhatsApp number?
                      </p>
                      <Stack direction={"row"}>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Yes"
                        />
                        <FormControlLabel control={<Checkbox />} label="No" />
                      </Stack>
                    </Stack>
                  </FormGroup>
                </Box>
              </Stack>
            </div>
          </div>

          {/*  */}

          <div className={styles["form-section"]}>
            <h2 className={styles["form-group-heading"]}>
              Business Name & Address
            </h2>
            <div className={styles["form-group"]}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="name">Enter Your Business Name</label>
                <TextField
                  id="name"
                  sx={{ ...textfieldStyles }}
                  variant="outlined"
                />
              </Stack>
            </div>
            <div className={styles["form-group"]}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="name">Enter Your Business Website</label>
                <TextField
                  id="name"
                  sx={{ ...textfieldStyles }}
                  variant="outlined"
                />
              </Stack>
            </div>
            <div className={styles["form-group"]}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="name">Enter Your Business Location</label>
                <TextField
                  id="name"
                  sx={{ ...textfieldStyles }}
                  variant="outlined"
                />
              </Stack>
            </div>
          </div>

          {/*  */}

          <div className={styles["form-section"]}>
            <h2 className={styles["form-group-heading"]}>
              Business Service Details
            </h2>
            <div className={styles["form-group"]}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="individual"
                    sx={{ mb: 3 }}
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: "2rem",
                            mr: 1,
                          },
                        }}
                      />
                    }
                    label={
                      <div className={styles["radio-label"]}>
                        <h4>Individual</h4>
                        <p>I work as a sole professional</p>
                      </div>
                    }
                  />
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: "2rem",
                            mr: 1,
                          },
                        }}
                      />
                    }
                    label={
                      <div className={styles["radio-label"]}>
                        <h4>Contractor / Agency</h4>
                        <p>I have a team of workers under me</p>
                      </div>
                    }
                  />
                  <FormControlLabel
                    value="other"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: "2rem",
                            mr: 1,
                          },
                        }}
                      />
                    }
                    label={
                      <div className={styles["radio-label"]}>
                        <h4>Business</h4>
                        <p>I have a business or shop</p>
                      </div>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/*  */}
          <div
            className={styles["form-section"]}
            style={{ paddingBottom: "20px" }}
          >
            <h2 className={styles["form-group-heading"]}>
              About Your Business
            </h2>
            <div className={styles["form-group"]}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="name">Write About Your Business</label>
                <TextField
                  id="name"
                  sx={{ ...textfieldStyles }}
                  variant="outlined"
                  multiline
                  rows={6}
                />
              </Stack>
            </div>
          </div>

          <Stack alignItems={"center"} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              type="submit"
              sx={{ padding: "20px 200px" }}
              size="large"
            >
              Register
            </Button>
          </Stack>
        </div>
      </form>
    </Card>
  );
};
export default RegisterForm;
