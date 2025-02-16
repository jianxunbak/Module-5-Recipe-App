import React from "react";
import { View, Text } from "react-native";
import { useUser } from "../context/UserContext"; // Import the user context
import { useIsLoadingAndEditing } from "../context/IsLoadingAndEditingContext"; // Import the loading/editing context

import { Button } from "react-native-paper";
import { styles } from "../styles/styles";

const HomeScreen = ({ navigation }) => {
  const { user, setUser } = useUser(); // Access user context
  const { setIsLoading, setIsEditing } = useIsLoadingAndEditing(); // Access loading/editing context

  const handleLogout = () => {
    setUser(null); // Clear user data
    navigation.navigate("Login"); // Navigate back to login screen
  };

  const goToRecipeList = () => {
    // Navigate to the Recipe List Screen (you would create this screen next)
    navigation.navigate("RecipeList");
  };

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => {
          console.log("Logout Button pressed");
          handleLogout();
        }}
      >
        Log Out
      </Button>

      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => {
          console.log("View Recipes pressed"), goToRecipeList();
        }}
      >
        View Recipes
      </Button>
    </View>
  );
};

export default HomeScreen;
