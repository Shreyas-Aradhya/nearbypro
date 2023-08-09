import { useState, useContext } from "react";
import styles from "./RegisterForm.module.css";
import back_icon from "/icons/back-icon.svg";

// mui
import Box from "@mui/material/Box";

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

import { AuthContext } from "../../contexts/AuthContext";
import Map from "../../components/Map/Map";
import PlacesAutocomplete from "../../components/Map/PlacesAutocomplete";

const textfieldStyles = {
  "& .MuiOutlinedInput-notchedOutline": {
    "&.Mui-focused": {
      borderColor: "#077BC1",
    },
    borderColor: "#077BC1",
  },
};

const BusinessNameForm = ({ setCurrForm }) => {
  const { vendor, updateBusiness } = useContext(AuthContext);

  const [bname, setBname] = useState(vendor?.business?.bname || "");
  const [bwebsite, setBwebsite] = useState(vendor?.business?.bwebsite || "");
  const [blocation, setBlocation] = useState(vendor?.business?.blocation || "");
  const [blocality, setBlocality] = useState(vendor?.business?.blocality || "");

  const [isLoading, setIsLoading] = useState(false);

  const handleLocalitySelect = (locality) => {
    setBlocality(locality);
  };

  const handleVendorRegister = async (e) => {
    e.preventDefault();
    const data = {
      business: {
        bname,
        bwebsite,
        blocation,
        blocality,
      },
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
          <h1 className={styles["form-title"]}>Business Name & Address</h1>
        </Stack>
        <Stack spacing={1} sx={{ width: "100%" }}>
          <label htmlFor="bname">Company / Store Name</label>
          <TextField
            id="bname"
            sx={{ ...textfieldStyles }}
            variant="outlined"
            value={bname}
            onChange={(e) => setBname(e.target.value)}
            required
          />
        </Stack>
        <Stack spacing={1} sx={{ width: "100%" }}>
          <label htmlFor="website">Business Website</label>
          <TextField
            id="website"
            sx={{ ...textfieldStyles }}
            variant="outlined"
            value={bwebsite}
            onChange={(e) => setBwebsite(e.target.value)}
          />
        </Stack>
        <Stack spacing={1} sx={{ width: "100%" }}>
          <label htmlFor="location">Business Address</label>
          <TextField
            id="location"
            sx={{ ...textfieldStyles }}
            variant="outlined"
            value={blocation}
            onChange={(e) => setBlocation(e.target.value)}
          />
        </Stack>
        <Stack spacing={1} sx={{ width: "100%" }}>
          <label htmlFor="locality">Locality</label>
          <PlacesAutocomplete getLocData={handleLocalitySelect} />
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
export default BusinessNameForm;
