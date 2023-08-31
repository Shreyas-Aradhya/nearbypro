import { useEffect, useMemo, useState, useRef } from "react";
// import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Wrapper, Marker } from "@googlemaps/react-wrapper";
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

const mapOptions = {
  center: { lat: 12.958, lng: 77.6 },
  zoom: 15,
  mapId: "bf5340f88e55a5a2",
};

function MyMap() {
  const [map, setMap] = useState();
  const ref = useRef();
  const markerRef = useRef();

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);

  if (map) {
    markerRef.current = new google.maps.Marker({
      position: { lat: 12.958, lng: 77.6 },
      map,
      title: "Hello World!",
      draggable: true,
    });
    markerRef.current.addListener("dragend", function (e) {
      console.log(this.getPosition().toJSON()); // this === marker
    });
  }

  return (
    <>
      <div ref={ref} id="map" className="google-map-container" />
    </>
  );
}

function GoogleMap({ getLocData, currData }) {
  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      <Wrapper
        apiKey={GOOGLE_MAPS_API_KEY}
        libraries={["marker"]}
        version="beta"
      >
        <MyMap />
      </Wrapper>
    </Stack>
  );
}

const PlacesAutocomplete = ({ getLocData, currData }) => {
  return <GoogleMap />;
};
export default PlacesAutocomplete;
