import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

const AddRecipeStyles = StyleSheet.create({
  MainContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 50,
    gap: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    width: width,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    width: 100,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    width: width - 140,
    borderRadius: 10,
    backgroundColor: "#D3D3D3",
    borderWidth: 0,
  },
  textInputWithButton: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    width: width - 170,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#D3D3D3",
    borderWidth: 0,
  },
  list: {
    flexDirection: "column",
  },
  button: {
    height: 40,
    width: 30,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  buttonAtInput: {
    height: 40,
    width: 30,
    backgroundColor: "black",
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

export default AddRecipeStyles;
