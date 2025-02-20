import { useCallback, useContext, useState } from "react";
import { useUser } from "../Context/UserContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "react-native-paper";
import LocationStyles from "../styles/LocationStyles";
import { LocationContext } from "../Context/LocationContext";

export default LocationScreen = () => {
  //   const { user, setUser } = useUser();
  const { errorMsg, getCurrentLocation, location } =
    useContext(LocationContext);

  const navigate = useNavigation();

  useFocusEffect(
    useCallback(() => {
      getCurrentLocation();
    }, [])
  );

  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     location: { latitude: latitude, longitude: longitude },
  //     address: address,
  //   }));

  return (
    <View style={LocationStyles.mainContainer}>
      <Text style={LocationStyles.address}>
        {errorMsg ? errorMsg : `Address: ${location.address}`}
      </Text>
      <Text style={LocationStyles.address}>
        {errorMsg ? errorMsg : `lat: ${location.latitude}`}
        {errorMsg ? errorMsg : `long: ${location.longitude}`}
      </Text>
    </View>
  );
};
