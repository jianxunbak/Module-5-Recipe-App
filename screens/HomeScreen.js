import React from "react";
import { Image, View, Text } from "react-native";
import { useUser } from "../context/UserContext"; // Import the user context
import { useIsLoadingAndEditing } from "../context/IsLoadingAndEditingContext"; // Import the loading/editing context

import { Button } from "react-native-paper";
import { styles } from "../styles/styles";

const HomeScreen = ({ navigation }) => {
  const { user, setUser } = useUser(); // Access user context
  const { setIsLoading, setIsEditing } = useIsLoadingAndEditing(); // Access loading/editing context

  //   const handleLogout = () => {
  //     setUser(null); // Clear user data
  //     navigation.navigate("Login"); // Navigate back to login screen
  //   };
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleViewRecipes = () => {
    // Navigate to the Recipe List Screen (you would create this screen next)
    navigation.navigate("Recipes");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/people-cooking-indoors-delicious-food-desserts_52683-33994.jpg?t=st=1739716088~exp=1739719688~hmac=970d3b7461d13d3da8cbf12c774e88c7a684168d015f7e571fb4fb6cfde2c0f6&w=740",
        }}
        style={{
          width: 300,
          height: 300,
          borderRadius: 200 / 2,
          alignSelf: "center",
          marginBottom: 20,
        }}
      />
      <Text style={styles.title}>All Your Recipes in One Place</Text>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => {
          console.log("Login Button pressed");
          handleLogin();
        }}
      >
        Login
      </Button>

      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => {
          console.log("View Recipes pressed"), handleViewRecipes();
        }}
      >
        View Recipes
      </Button>
    </View>
  );
};

export default HomeScreen;
