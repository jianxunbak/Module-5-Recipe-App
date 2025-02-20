import { useCallback, useContext, useEffect, useState } from "react";
import { useUser } from "../Context/UserContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import LocationStyles from "../styles/LocationStyles";
import { LocationContext } from "../Context/LocationContext";
import MapView, { Marker } from "react-native-maps";
import { recipeContext } from "../Context/RecipeContext";
import { useIsLoadingAndEditing } from "../Context/IsLoadingAndEditingContext";

export default LocationScreen = () => {
  //   const { user, setUser } = useUser();
  const { errorMsg, getCurrentLocation, location, setLocation } =
    useContext(LocationContext);
  const { allRecipes, getAllRecipes } = useContext(recipeContext);
  const navigate = useNavigation();
  const { isLoading } = useIsLoadingAndEditing();
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

  useEffect(() => {
    getAllRecipes();
  }, []);
  console.log(allRecipes);

  if (isLoading) {
    return (
      <View style={LocationStyles.mainContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const handleNavigate = (selectedRecipe) => {
    navigate.navigate("addRecipe", {
      screen: "Recipe card",
      params: { selectedRecipe: selectedRecipe },
    });
  };
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

        {!isLoading &&
          allRecipes.map((item, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: parseFloat(item.latitude),
                  longitude: parseFloat(item.longitude),
                }}
                title={item.title}
              >
                <TouchableOpacity
                  onPress={() => {
                    handleNavigate(item);
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={{ uri: item.imgSrc }}
                      style={LocationStyles.mapImage}
                      resizeMode="cover"
                    />
                  </View>
                </TouchableOpacity>
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
};
