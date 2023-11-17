import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import Map from "../InteractiveMapView/Map";

// import { DataProvider } from '../DistrictAndRTH/DataContext.js';

export default function Places() {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <Map />
    </>
  );
}
