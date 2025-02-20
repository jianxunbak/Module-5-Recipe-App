import React from "react";
import { View, KeyboardAvoidingView } from "react-native";

import { useUser } from "../Context/UserContext"; // Import user context

import { TextInput, Button, Text, ActivityIndicator } from "react-native-paper";
import { styles } from "../styles/styles";
import { useIsLoadingAndEditing } from "../Context/IsLoadingAndEditingContext";
import { useLogin } from "../Context/LoginContext";

const LoginScreen = ({ navigation }) => {
  const { user, setUser } = useUser(); // Get setUser from UserContext
  const { isLoading, setIsLoading } = useIsLoadingAndEditing(); // Get loading state
  const { login, setLogin } = useLogin();

  const handleInput = (name, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  //simulate login and getting user details
  const handleLogin = () => {
    setIsLoading(true);
    if (user.email === "faizal@example.com" && user.password === "password") {
      setLogin(true);
      setUser({
        username: "Faizal | SE8",
        id: "joyful_avocado_99353",
        email: "faizal@example.com",
        memberSince: "19 Aug 2024",
        about: "Software Engineer | Tech Enthusiast",
        profilePic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQG6U7DsIIUVQmkDyihIPWI-aBCmeLli02NQ&s",
      });
      setIsLoading(false);
      alert("Login Successfully");
      navigation.navigate("Home");
    } else {
      alert("Incorrect credentials");
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {isLoading ? (
        <View>
          <Text style={styles.title}>Loading...</Text>
          <ActivityIndicator animating={true} color="#6200ee" />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Welcome</Text>
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
