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
    width: 50, // Fixed width for the image
    height: 50, // Fixed height for the image
    borderWidth: 5,
    borderColor: "purple",
    borderRadius: 25,
  },
  ImageCallout: {
    width: 200, // Fixed width for the image
    height: 150, // Fixed height for the image
    borderWidth: 5,
    borderColor: "purple",
    borderRadius: 25,
  },
  callout: {
    borderRadius: 75,
    width: 200,
    height: 200,
    justifyContent: "center",
    zIndex: 10,
  },
  text: {
    height: 50,
    fontWeight: "bold",
  },
});

export default LocationStyles;
