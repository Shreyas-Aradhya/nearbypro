import styles from "./ProfileForm.module.css";
import infoIcon from "/img/info-icon.png";
import uploadIcon from "/img/upload-icon.png";
import bannedIcon from "/icons/banned-icon.svg";
import searchIcon from "/icons/search-icon.svg";

import profileImg from "/img/profile-icon.png";
import indiaFlag from "/img/india-flag-icon.png";

import { useState, useEffect, useContext, useRef } from "react";

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
import FormControl from "@mui/material/FormControl";

import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";

import CircularProgress from "@mui/material/CircularProgress";

import { enqueueSnackbar } from "notistack";

import { AuthContext } from "../../../contexts/AuthContext";
import s3ImageUpload from "../../../services/s3ImageUpload";
import getSubCategories from "../../../services/getSubCategories";

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

const ProfilePictureInput = ({ handleProfilePicUpload }) => {
  return (
    <label className={styles["edit-icon-btn"]}>
      <input
        type="file"
        name="custom-file-input"
        id="custom-file-input"
        onChange={(e) => handleProfilePicUpload(e.target.files[0])}
        className={styles["custom-file-input"]}
      />
    </label>
  );
};

const getSearchParams = (props) => {
  props.InputProps.startAdornment = (
    <InputAdornment position="start">
      <img width="30" src={searchIcon} alt="search icon" />
    </InputAdornment>
  );
  return props;
};

const FileInput = ({ handleImgUpload, disabled }) => {
  const inputRef = useRef(null);
  const onUpload = (e) => {
    if (e.target.files[0]) {
      handleImgUpload(e.target.files[0]);
      inputRef.current.value = null;
    }
  };
  return (
    <label className={styles["file-input-container"]}>
      <input
        type="file"
        name="custom-file-input"
        id="custom-file-input"
        ref={inputRef}
        onChange={onUpload}
        className={styles["custom-file-input"]}
        disabled={disabled}
      />
      <img
        src={disabled ? bannedIcon : uploadIcon}
        alt="upload button icon"
        width={20}
      />
    </label>
  );
};

const ProfileForm = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getSubCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const { user, vendor, updateBusiness } = useContext(AuthContext);

  const [bname, setBname] = useState(vendor?.business?.bname || "");
  const [bwebsite, setBwebsite] = useState(vendor?.business?.bwebsite || "");
  const [blocation, setBlocation] = useState(vendor?.business?.blocation || "");
  const [btype, setBtype] = useState(vendor?.business?.btype || "individual");
  const [babout, setBabout] = useState(vendor?.business?.babout || "");

  const [files, setFiles] = useState(vendor?.business?.bphotos || []);

  const [isLoading, setIsLoading] = useState(false);

  const [autoCompleteValue, setAutoCompleteValue] = useState(null);

  const [selectedCategories, setSelectedCategories] = useState(
    vendor?.categories || []
  );

  const [name, setName] = useState(user?.name || "");
  const [mobileNumber, setMobileNumber] = useState(user?.mobile || "");
  const [whatsApp, setWhatsApp] = useState(
    user?.whatsApp === true ? "yes" : "no" || "yes"
  );

  const [profilePic, setProfilePic] = useState(
    user?.profilePicture || profileImg || ""
  );

  const handleProfilePicUpload = async (data) => {
    // console.log(data);
    try {
      const url = await s3ImageUpload(data);
      console.log(url);
      setProfilePic(url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategorySelect = () => {
    if (
      autoCompleteValue &&
      !selectedCategories?.find((cat) => cat?.id === autoCompleteValue?.id)
    ) {
      setSelectedCategories((prev) => [...prev, autoCompleteValue]);
      setAutoCompleteValue(null);
    }
  };

  const handleCategoryDelete = (catId) => {
    setSelectedCategories((prev) => prev?.filter((cat) => cat?.id !== catId));
  };

  const handleImgUpload = async (data) => {
    try {
      const url = await s3ImageUpload(data);
      setFiles((prev) => [...prev, url]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImgDelete = (index) => {
    let updatedArr = [...files];
    updatedArr.splice(index, 1);
    setFiles(updatedArr);
  };

  const handleVendorRegister = async (e) => {
    e.preventDefault();
    const data = {
      business: {
        bname,
        bwebsite,
        blocation,
        btype,
        babout,
        bphotos: files,
      },
      categories: selectedCategories,
    };
    try {
      setIsLoading(true);
      await updateBusiness(data);
      enqueueSnackbar("Business info updated successfully!", {
        variant: "success",
      });
      setIsLoading(false);
    } catch (error) {
      enqueueSnackbar("Failed to update!, Please try again later", {
        variant: "error",
      });
      setIsLoading(false);
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
      <form onSubmit={handleVendorRegister}>
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
                <ProfilePictureInput
                  handleProfilePicUpload={handleProfilePicUpload}
                />
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
        </div>
        <div className={styles["form-wrapper"]}>
          {/*  */}

          <div className={styles["form-section"]}>
            <h2 className={styles["form-group-heading"]}>
              Business Name & Address
            </h2>
            <div className={styles["form-group"]}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="bname">Enter Your Business Name</label>
                <TextField
                  id="bname"
                  sx={{ ...textfieldStyles }}
                  variant="outlined"
                  value={bname}
                  onChange={(e) => setBname(e.target.value)}
                />
              </Stack>
            </div>
            <div className={styles["form-group"]}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="website">Enter Your Business Website</label>
                <TextField
                  id="website"
                  sx={{ ...textfieldStyles }}
                  variant="outlined"
                  value={bwebsite}
                  onChange={(e) => setBwebsite(e.target.value)}
                />
              </Stack>
            </div>
            <div className={styles["form-group"]}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="location">Enter Your Business Location</label>
                <TextField
                  id="location"
                  sx={{ ...textfieldStyles }}
                  variant="outlined"
                  value={blocation}
                  onChange={(e) => setBlocation(e.target.value)}
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
              <FormControl sx={{ mb: 2 }}>
                <RadioGroup
                  aria-labelledby="btype-buttons-group-label"
                  name="btype-buttons-group"
                  value={btype}
                  onChange={(e) => setBtype(e.target.value)}
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
                    value="agency"
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
                        <h4>Contractor / Agency</h4>
                        <p>I have a team of workers under me</p>
                      </div>
                    }
                  />
                  <FormControlLabel
                    value="business"
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
                        <h4>Business</h4>
                        <p>I have a business or shop</p>
                      </div>
                    }
                  />
                </RadioGroup>
              </FormControl>

              <h3 className={styles["group-sub-heading"]}>
                My Business Skills
              </h3>
              <Stack
                direction="row"
                spacing={1}
                sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}
              >
                {selectedCategories?.map((cat, index) => (
                  <Chip
                    label={cat?.name}
                    variant="outlined"
                    onDelete={() => handleCategoryDelete(cat?.id)}
                    key={index}
                  />
                ))}
              </Stack>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="name">Search To Select Your Skills</label>
                <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                  <Autocomplete
                    sx={{ flex: "1" }}
                    disablePortal
                    id="combo-box-demo"
                    options={categories}
                    getOptionLabel={(option) => option?.name || ""}
                    value={autoCompleteValue}
                    onChange={(event, newValue) => {
                      setAutoCompleteValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        sx={{ ...textfieldStyles }}
                        fullWidth
                        variant="outlined"
                        {...getSearchParams(params)}
                      />
                    )}
                  />
                  <Button variant="contained" onClick={handleCategorySelect}>
                    Add +
                  </Button>
                </Stack>
              </Stack>
              <div className={styles["info-box"]}>
                <img
                  className={styles["info-icon"]}
                  src={infoIcon}
                  alt="info icon"
                />
                <p className="info-txt">
                  For Ex. If you are an "Plumber", type "plu" and select
                  "Plumber" from the list.
                </p>
              </div>
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
              <label>Upload images of your work or business</label>
              <Stack
                direction={"row"}
                sx={{ mt: 2, mb: 3, flexWrap: "wrap", gap: 2 }}
              >
                {files.map((file, index) => (
                  <Stack spacing={1} key={index}>
                    <Box
                      component="img"
                      sx={{
                        height: 130,
                        width: 130,
                        boxShadow: "0px 0px 6px #00000029",
                        borderRadius: "8px",
                      }}
                      alt="uploaded img"
                      src={file}
                    />
                    <Button
                      color="error"
                      onClick={() => handleImgDelete(index)}
                    >
                      Delete
                    </Button>
                  </Stack>
                ))}
                <FileInput
                  handleImgUpload={handleImgUpload}
                  disabled={files?.length >= 5}
                />
              </Stack>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <label htmlFor="about">Write About Your Business</label>
                <TextField
                  id="about"
                  sx={{ ...textfieldStyles }}
                  variant="outlined"
                  multiline
                  rows={6}
                  value={babout}
                  onChange={(e) => setBabout(e.target.value)}
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
