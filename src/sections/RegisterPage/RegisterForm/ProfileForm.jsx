import styles from "./RegisterForm.module.css";
import profileImg from "/img/profile-icon.png";
import indiaFlag from "/img/india-flag-icon.png";

import { useState, useContext } from "react";

// mui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import CircularProgress from "@mui/material/CircularProgress";

import { enqueueSnackbar } from "notistack";

import { AuthContext } from "../../../contexts/AuthContext";
import s3ImageUpload from "../../../services/s3ImageUpload";

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

const FileInput = ({ handleImgUpload }) => {
  return (
    <label className={styles["edit-icon-btn"]}>
      <input
        type="file"
        name="custom-file-input"
        id="custom-file-input"
        onChange={(e) => handleImgUpload(e.target.files[0])}
        className={styles["custom-file-input"]}
      />
    </label>
  );
};

const ProfileForm = () => {
  const { user, updateProfile } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || "");
  const [mobileNumber, setMobileNumber] = useState(user?.mobile || "");
  const [whatsApp, setWhatsApp] = useState(
    user?.whatsApp === true ? "yes" : "no" || "yes"
  );

  const [isLoading, setIsLoading] = useState(false);

  const [profilePic, setProfilePic] = useState(
    user?.profilePicture || profileImg || ""
  );
  const handleImgUpload = async (data) => {
    // console.log(data);
    try {
      const url = await s3ImageUpload(data);
      console.log(url);
      setProfilePic(url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const data = {
      name,
      mobile: mobileNumber,
      whatsApp: whatsApp === "yes" ? true : false,
      profilePicture: typeof profilePic === "string" ? profilePic : null,
    };
    try {
      setIsLoading(true);
      await updateProfile(data);
      enqueueSnackbar("Profile updated successfully!", { variant: "success" });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar("Failed to update!, Please try again later", {
        variant: "error",
      });
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "800px",
        borderRadius: "10px",
      }}
    >
      <form onSubmit={handleProfileUpdate}>
        <div className={styles["form-wrapper"]}>
          {/*  */}

          <div className={styles["form-section"]} style={{ paddingTop: 0 }}>
            <h2 className={styles["form-group-heading"]}>Profile Details</h2>
            <div className={styles["register-icon-container"]}>
              <div className={styles["profile-group"]}>
                <div className={styles["profile-image-container"]}>
                  <img
                    src={profilePic}
                    alt="profile image"
                    className={styles["register-icon"]}
                  />
                </div>
                <FileInput handleImgUpload={handleImgUpload} />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="name">Name</label>
                <TextField
                  id="name"
                  sx={{ ...textfieldStyles }}
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CountryCode />
                        </InputAdornment>
                      ),
                    }}
                    disabled
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
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={whatsApp}
                        onChange={(e) => setWhatsApp(e.target.value)}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </Stack>
                  </FormGroup>
                </Box>
              </Stack>
            </div>
          </div>

          {/*  */}

          <Stack alignItems={"center"} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              type="submit"
              sx={{ padding: "20px 200px" }}
              size="large"
            >
              {isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "update"
              )}
            </Button>
          </Stack>
        </div>
      </form>
    </Card>
  );
};
export default ProfileForm;
