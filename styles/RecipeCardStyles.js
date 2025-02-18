import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

const RecipeStyles = StyleSheet.create({
  MainContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 50,
  },
  subContainer: {
    flexDirection: "column",
    marginBottom: 10,
    marginTop: 10,
  },

  scrollView: {
    flexGrow: 1,
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
  image: {
    height: 600,
    width: width,
    marginBottom: 20,
  },
  description: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    fontSize: 13,
  },
  list: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    marginTop: 10,
  },
  listIndex: {
    width: 30,
    textAlign: "flext-start",
  },
  listDetail: {
    textAlign: "justify",
  },

  listDescription: {
    textAlign: "justify",
  },
  button: {
    height: 30,
    width: 50,
    backgroundColor: "#694f8f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonContainer: {
    marginBottom: 50,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    gap: 10,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    fontSize: 15,
  },
});

export default RecipeStyles;
