import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
const LocationStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  address: {
    textAlign: "center",
  },
  map: {
    flex: 1,
    height: height,
    width: width,
  },
  mapImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default LocationStyles;
