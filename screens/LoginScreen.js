import React, { useEffect, useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";

import { useUser } from "../Context/UserContext"; // Import user context

import { TextInput, Button, Text, ActivityIndicator } from "react-native-paper";
import { styles } from "../styles/styles";
import { useIsLoadingAndEditing } from "../Context/IsLoadingandEditingContext";
import { useLogin } from "../Context/LoginContext";

const LoginScreen = ({ navigation }) => {
  const { user, setUser } = useUser(); // Get setUser from UserContext
  const { isLoading, setIsLoading } = useIsLoadingAndEditing(); // Get loading state
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { login, setLogin } = useLogin();
  // const sampleUser = {
  //   email: "faizal@example.com",
  //   password: "password",
  // };

  const handleInput = (name, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    setIsLoading(true);
    if (user.email === "faizal@example.com" && user.password === "password") {
      setLogin(true);
      setIsLoading(false);
      alert("Login Successfully");
      navigation.navigate("Home");
    } else {
      alert("Incorrect credentials");
      setIsLoading(false);
    }

    // // Simulate login request (replace with real authentication logic)
    // setTimeout(() => {
    //   // console.log("Inside setTimeout");
    //   if (user.email === "faizal@example.com" && user.password === "password") {
    //     setLogin(true);
    //   } else {
    //     alert("Incorrect credentials");
    //   }
    //   // setUser({ name: "Foodie Tan", email: "foodietan@gmail.com" });
    //   // console.log("set user done");
    //   setLoading((prev) => {
    //     console.log("prev loading state: ", prev);
    //     return false;
    //   });
    //   // setIsLoading((prev) => {
    //   //   return false;
    //   // });
    //   // console.log("User Logged In, Navigating Away...");
    //   // console.log(navigation.getState());
    //   // 🔹 Reset the stack to ensure RecipesScreen is shown after login
    //   navigation.navigate("Recipe");
    // }, 2000);
  };
  useEffect(() => {
    console.log("isLoading (from useEffect):", isLoading); // Track the state after it changes
  }, [isLoading]); // Watch for changes to isLoading

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {isLoading ? (
        <View>
          <Text style={styles.title}>Loading...</Text>
          <ActivityIndicator animating={true} color="#6200ee" />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Welcome Back</Text>
          <TextInput
            label="Email"
            value={user.email}
            onChangeText={(text) => handleInput("email", text)}
            mode="flat"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            label="Password"
            value={user.password}
            onChangeText={(text) => handleInput("password", text)}
            mode="flat"
            secureTextEntry
            style={styles.input}
          />

          {isLoading ? (
            <ActivityIndicator animating={true} color="#6200ee" />
          ) : (
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.button}
              disabled={!user.email || !user.password}
            >
              Log In
            </Button>
          )}

          <Button mode="text" onPress={() => navigation.navigate("SignUp")}>
            Don't have an account? Sign Up
          </Button>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
