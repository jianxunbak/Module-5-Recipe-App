import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

const AddRecipeStyles = StyleSheet.create({
  MainContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 20,
    marginTop: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
  SafeAreaView: {
    flex: 1,
    marginTop: 60,
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  subTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flexDirection: "column",
    width: width,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    height: 40,
    paddingLeft: 8,
    width: width - 40,
    borderRadius: 10,
    backgroundColor: "#CBC3E3",
    borderWidth: 0,
    textAlignVertical: "center",
  },

  list: {
    flexDirection: "column",
  },
  button: {
    height: 40,
    width: 80,
    backgroundColor: "#694f8f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  addButton: {
    height: 40,
    width: 40,
    backgroundColor: "#694f8f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttons: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    gap: 10,
  },
  inputSideButton: {
    flexDirection: "row",
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
  textInputWithButton: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    width: width - 80,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#CBC3E3",
    borderWidth: 0,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    fontSize: 20,
  },
  formError: {
    fontSize: 12,
    color: "red",
    marginLeft: 100,
  },
  backArrow: {
    marginTop: 10,
    marginLeft: 20,
  },
  titleContainer: {
    flexDirection: "row",
  },
});

export default AddRecipeStyles;
