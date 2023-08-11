import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "../../config";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const textfieldStyles = {
  "& .MuiOutlinedInput-notchedOutline": {
    "&.Mui-focused": {
      borderColor: "#077BC1",
    },
    borderColor: "#077BC1",
  },
};

const PlacesInput = ({ setSelected, getLocData, currData }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [locAddress, setLocAddress] = useState(currData?.address || "");

  const handleSelect = async (address) => {
    clearSuggestions();
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    setLocAddress(address);
    getLocData({ address, lat, lng });
  };

  return (
    <Autocomplete
      value={locAddress}
      onChange={(event, newValue) => {
        handleSelect(newValue);
      }}
      inputValue={value}
      onInputChange={(event, newInputValue) => {
        setValue(newInputValue);
      }}
      options={status === "OK" ? data.map((option) => option.description) : []}
      //   sx={{ width: 300 }}
      fullWidth
      disabled={!ready}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" sx={{ ...textfieldStyles }} />
      )}
    />
  );
};

function Map({ getLocData, currData }) {
  const mapCenter = useMemo(() => ({ lat: 12.958, lng: 77.6 }), []);
  const [selected, setSelected] = useState(
    Object.keys(currData).length > 0
      ? { lat: currData?.lat, lng: currData?.lng }
      : null
  );
  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      <PlacesInput
        setSelected={setSelected}
        getLocData={getLocData}
        currData={currData}
      />
      <GoogleMap
        zoom={15}
        center={selected || mapCenter}
        mapContainerClassName="google-map-container"
      >
        <MarkerF position={selected || mapCenter} />
      </GoogleMap>
    </Stack>
  );
}

const mapLib = ["places"];

const PlacesAutocomplete = ({ getLocData, currData }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: mapLib,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map getLocData={getLocData} currData={currData} />;
};
export default PlacesAutocomplete;
