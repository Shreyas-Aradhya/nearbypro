import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import { GOOGLE_MAPS_API_KEY } from "../../config";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });
  const mapCenter = useMemo(() => ({ lat: 12.958, lng: 77.6 }), []);
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={mapCenter}
      mapContainerClassName="google-map-container"
    >
      <MarkerF position={mapCenter} />
    </GoogleMap>
  );
};
export default Map;
