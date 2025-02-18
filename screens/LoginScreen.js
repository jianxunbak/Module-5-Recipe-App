import React, { useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";

import { useUser } from "../Context/UserContext"; // Import user context

import { TextInput, Button, Text, ActivityIndicator } from "react-native-paper";
import { styles } from "../styles/styles";
import { useIsLoadingAndEditing } from "../Context/isLoadingandEditingContext";

const LoginScreen = ({ navigation }) => {
  const { setUser } = useUser(); // Get setUser from UserContext
  const { setIsLoading } = useIsLoadingAndEditing; // Get loading state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setIsLoading(true);

    // Simulate login request (replace with real authentication logic)
    setTimeout(() => {
      setUser({ name: "John Doe", email });
      setLoading(false);
      setIsLoading(false);
      navigation.replace("Recipes"); // Navigate to Recipes
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
