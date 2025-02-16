import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

const RecipeStyles = StyleSheet.create({
  MainContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 50,
  },
  subContainer: {
    flexDirection: "column",
    marginBottom: 50,
  },

  scrollView: {
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  image: {
    height: 600,
    width: width,
    marginBottom: 50,
  },
  description: {
    fontSize: 13,
    textAlign: "center",
  },
  list: {
    textAlign: "center",
    margin: 5,
  },
});

export default RecipeStyles;
