import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

const FavoriteStyle = StyleSheet.create({
  MainTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  MainContainer: {
    width: width - 40,
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "top",
    borderRadius: 20,
    backgroundColor: "#CBC3E3",
    overflow: "hidden",
  },
  leftContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width: width - 180,
    height: 80,
    alignContent: "top",
  },
  titleContainer: {
    height: 100,
    overflow: "hidden",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    height: 150,
    width: 120,
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    height: 50,
    textAlign: "justify",
  },
  cusine: { height: 20 },
  scrollView: {
    flexGrow: 1,
  },
  loading: {
    marginLeft: 20,
    height: 20,
  },
});
export default FavoriteStyle;
