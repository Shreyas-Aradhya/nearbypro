import { useState, useContext, useRef } from "react";
import styles from "./RegisterForm.module.css";
import back_icon from "/icons/back-icon.svg";
import uploadIcon from "/img/upload-icon.png";
import bannedIcon from "/icons/banned-icon.svg";

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

import s3ImageUpload from "../../services/s3ImageUpload";

const textfieldStyles = {
  "& .MuiOutlinedInput-notchedOutline": {
    "&.Mui-focused": {
      borderColor: "#077BC1",
    },
    borderColor: "#077BC1",
  },
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

const BusinessAboutImgForm = ({ setCurrForm }) => {
  const { vendor, updateBusiness } = useContext(AuthContext);

  const [babout, setBabout] = useState(vendor?.business?.babout || "");

  const [files, setFiles] = useState(vendor?.business?.bphotos || []);

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

  const [isLoading, setIsLoading] = useState(false);

  const handleVendorRegister = async (e) => {
    e.preventDefault();
    const data = {
      business: {
        babout,
        bphotos: files,
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
          <h1 className={styles["form-title"]}>Business Service Details</h1>
        </Stack>
        <Stack spacing={1} sx={{ width: "100%" }}>
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
                <Button color="error" onClick={() => handleImgDelete(index)}>
                  Delete
                </Button>
              </Stack>
            ))}
            <FileInput
              handleImgUpload={handleImgUpload}
              disabled={files?.length >= 5}
            />
          </Stack>
        </Stack>
        <Stack spacing={1} sx={{ width: "100%" }}>
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
export default BusinessAboutImgForm;
