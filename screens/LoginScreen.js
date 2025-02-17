import React, { useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";

import { useIsLoadingAndEditing } from "../context/IsLoadingAndEditingContext"; // Import loading context
import { useUser } from "../context/UserContext"; // Import user context

import { TextInput, Button, Text, ActivityIndicator } from "react-native-paper";
import { styles } from "../styles/styles";

const LoginScreen = ({ navigation }) => {
  const { setUser } = useUser(); // Get setUser from UserContext
  const { setIsLoading } = useIsLoadingAndEditing(); // Get loading state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setIsLoading(true);

    // Simulate login request (replace with real authentication logic)
    setTimeout(() => {
      console.log("Inside setTimeout");
      setUser({ name: "Foodie Tan", email: "foodietan@gmail.com" });
      console.log("set user done");
      setLoading((prev) => {
        console.log("prev loading state: ", prev);
        return false;
      });
      // setIsLoading((prev) => {
      //   return false;
      // });
      console.log("User Logged In, Navigating Away...");
      // console.log(navigation.getState());
      // 🔹 Reset the stack to ensure RecipesScreen is shown after login
      navigation.navigate("Recipe");
    }, 2000);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="flat"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="flat"
        secureTextEntry
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator animating={true} color="#6200ee" />
      ) : (
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          disabled={!email || !password}
        >
          Log In
        </Button>
      )}

      <Button mode="text" onPress={() => navigation.navigate("SignUp")}>
        Don't have an account? Sign Up
      </Button>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
