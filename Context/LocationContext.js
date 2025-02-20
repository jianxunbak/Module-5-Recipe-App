import { createContext, useState } from "react";
import * as Location from "expo-location";

export const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [errorMsg, setErrorMsg] = useState(null);
  //   const [isActive, setIsActive] = useState(false);
  const [location, setLocation] = useState({
    address: "Unknown address",
    city: "Unknown city",
    latitude: 1.3521,
    longitude: 103.8198,
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
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
      let city = "Unknown";
      let address = "Unknown";
      if (addressResult.length > 0) {
        city = addressResult[0].city || "unknown";
        address = addressResult[0].street || "No address available";
      }

      setLocation((prevLocation) => ({
        ...prevLocation,
        city: city,
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
    setLocation,
    getCurrentLocation,
    location,
  };

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
}
