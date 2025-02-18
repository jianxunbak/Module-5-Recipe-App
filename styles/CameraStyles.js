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

  imageContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  selectedImage: {
    width: width - 40,
    height: width - 40,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  photoButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  photoButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
});

export default CameraStyle;
