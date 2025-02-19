import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  MainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
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
});

export default profileStyles;
