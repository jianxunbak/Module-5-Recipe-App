import { createContext, useState } from "react";
import * as Location from "expo-location";

export const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [errorMsg, setErrorMsg] = useState(null);
  //   const [isActive, setIsActive] = useState(false);
  const [location, setLocation] = useState({
    address: "",
    latitude: "",
    longitude: "",
  });
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    try {
      let loc = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = loc.coords;
      const addressResult = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      let address = "Unknown";
      if (addressResult.length > 0) {
        address = addressResult[0].city || "unknown";
      }
      setLocation(() => ({
        address: address,
        latitude: latitude,
        longitude: longitude,
      }));
    } catch (error) {
      setErrorMsg("Error fetching location");
    }
  };
  const contextValue = {
    errorMsg,
    setErrorMsg,

    getCurrentLocation,
    location,
  };

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
}
