import { Dimensions, Platform, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

const profileStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 20,
    marginTop: 20,
  },
  SafeAreaView: {
    flex: 1,
    marginTop: 20,
    padding: 20,
  },
  MainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  username: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  userId: {
    color: "#aaa",
    fontSize: 14,
  },
  body: {
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  sectionContent: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 10,
  },
  subContainer: {
    marginBottom: 10,
  },
  button: {
    height: 40,
    width: 80,
    backgroundColor: "#694f8f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    fontSize: 20,
  },
  textInput: {
    height: 40,
    paddingLeft: 8,
    width: width - 40,
    borderRadius: 10,
    backgroundColor: "#CBC3E3",
    borderWidth: 0,
    textAlignVertical: "center",
    paddingTop: Platform.OS === "ios" ? 10 : 0, // Add padding to align text vertically on iOS
    paddingBottom: Platform.OS === "ios" ? 10 : 0, // Adjust padding for iOS
  },
  buttons: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    gap: 10,
  },
  inputSideButton: {
    flexDirection: "row",
  },
  textInputWithButton: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    width: width - 70,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#CBC3E3",
    borderWidth: 0,
  },
  buttonAtInput: {
    height: 40,
    width: 30,
    backgroundColor: "#694f8f",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    fontSize: 20,
  },
});

export default profileStyles;
