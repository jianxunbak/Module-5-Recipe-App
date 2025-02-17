import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

const CameraStyle = StyleSheet.create({
  container: {
    height: height,
  },
  cameraContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 100,
    width: width,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between", // Centers the buttons horizontally
    alignItems: "center", // Centers the buttons vertically
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    height: height - 300,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    width: 130,
    height: 40,
    backgroundColor: "#694f8f",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    height: 20,
    color: "white",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default CameraStyle;
