import { useState, useContext, useEffect } from "react";
import styles from "./RegisterForm.module.css";
import back_icon from "/icons/back-icon.svg";
import infoIcon from "/img/info-icon.png";
import searchIcon from "/icons/search-icon.svg";

// mui

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";

import CircularProgress from "@mui/material/CircularProgress";

import getSubCategories from "../../services/getSubCategories";

import { enqueueSnackbar } from "notistack";

import { AuthContext } from "../../contexts/AuthContext";

const textfieldStyles = {
  "& .MuiOutlinedInput-notchedOutline": {
    "&.Mui-focused": {
      borderColor: "#077BC1",
    },
    borderColor: "#077BC1",
  },
};

const getSearchParams = (props) => {
  props.InputProps.startAdornment = (
    <InputAdornment position="start">
      <img width="30" src={searchIcon} alt="search icon" />
    </InputAdornment>
  );
  return props;
};

const BusinessDetailsForm = ({ setCurrForm }) => {
  const { vendor, updateBusiness } = useContext(AuthContext);

  const [categories, setCategories] = useState([]);
  const [btype, setBtype] = useState(vendor?.business?.btype || "individual");

  const [autoCompleteValue, setAutoCompleteValue] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(
    vendor?.categories || []
  );

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

  const [isLoading, setIsLoading] = useState(false);

  const handleVendorRegister = async (e) => {
    e.preventDefault();
    const data = {
      business: {
        btype,
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
      setCurrForm((prev) => prev + 1);
    } catch (error) {
      enqueueSnackbar("Failed to update!, Please try again later", {
        variant: "error",
      });
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleVendorRegister}>
      <Stack
        alignItems={"start"}
        sx={{
          width: "100%",
          maxWidth: { xs: "350px", sm: "450px" },
          mx: "auto",
        }}
        spacing={3}
      >
        <Stack
          direction="row"
          spacing={{ xs: 2, md: 0 }}
          alignItems={"center"}
          sx={{ position: "relative" }}
        >
          <button
            className={styles["back-icon-btn"]}
            onClick={() => setCurrForm((prev) => prev - 1)}
          >
            <img
              src={back_icon}
              alt="back btn"
              className={styles["back-icon"]}
            />
          </button>
          <h1 className={styles["form-title"]}>Business Service Details</h1>
        </Stack>
        <FormControl sx={{ mb: 2 }}>
          <RadioGroup
            aria-labelledby="btype-buttons-group-label"
            name="btype-buttons-group"
            onChange={(e) => setBtype(e.target.value)}
          >
            <FormControlLabel
              value="individual"
              sx={{ mb: 3 }}
              control={
                <Radio
                  required
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
                  <h4>
                    Individual <span className="red-text">*</span>
                  </h4>
                  <p>I work as a sole professional</p>
                </div>
              }
            />
            <FormControlLabel
              value="agency"
              sx={{ mb: 3 }}
              control={
                <Radio
                  required
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
                  <h4>
                    Contractor / Agency <span className="red-text">*</span>
                  </h4>
                  <p>I have a team of workers under me</p>
                </div>
              }
            />
            <FormControlLabel
              value="business"
              sx={{ mb: 3 }}
              control={
                <Radio
                  required
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
                  <h4>
                    Business <span className="red-text">*</span>
                  </h4>
                  <p>I have a business or shop</p>
                </div>
              }
            />
          </RadioGroup>
        </FormControl>
        <Stack spacing={1} sx={{ width: "100%" }}>
          <h3 className={styles["group-sub-heading"]}>My Business Skills</h3>
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
        </Stack>
        <Stack spacing={1} sx={{ width: "100%" }}>
          <Stack spacing={1} sx={{ mb: 3 }}>
            <label htmlFor="name">
              Search To Select Your Skills <span className="red-text">*</span>
            </label>
            <Stack direction={{ xs: "row", md: "row" }} spacing={2}>
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
                    placeholder="eg: Plumber"
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
              For Ex. If you are an &quot;Plumber&quot;, type &quot;plu&quot;
              and select &quot;Plumber&quot; from the list.
            </p>
          </div>
        </Stack>
        <Button fullWidth type="submit" variant="contained" size="large">
          {isLoading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            "SAVE & CONTINUE"
          )}
        </Button>
      </Stack>
    </form>
  );
};
export default BusinessDetailsForm;
