import { useCallback, useContext, useEffect, useState } from "react";
import { useUser } from "../Context/UserContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "react-native-paper";
import LocationStyles from "../styles/LocationStyles";
import { LocationContext } from "../Context/LocationContext";
import MapView, { Marker } from "react-native-maps";

export default LocationScreen = () => {
  //   const { user, setUser } = useUser();
  const { errorMsg, getCurrentLocation, location, setLocation } =
    useContext(LocationContext);

  const navigate = useNavigation();

  useFocusEffect(
    useCallback(() => {
      getCurrentLocation();
      setLocation((prevLocation) => ({
        ...prevLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }));
    }, [])
  );
  return (
    <View style={LocationStyles.mainContainer}>
      <MapView
        style={LocationStyles.map}
        region={{
          latitude: parseFloat(location.latitude),
          longitude: parseFloat(location.longitude),
          latitudeDelta: location.latitudeDelta,
          longitudeDelta: location.longitudeDelta,
        }}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(location.latitude),
            longitude: parseFloat(location.longitude),
          }}
          title="Your are here at"
          description={location.address}
        ></Marker>
      </MapView>
    </View>
  );
};
