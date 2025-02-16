import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { IsLoadingAndEditingProvider } from "./context/IsLoadingAndEditingContext";
import { UserProvider } from "./context/UserContext";
import { Provider as PaperProvider } from "react-native-paper";
import { styles } from "./styles/styles";

import HomeScreen from "./screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <UserProvider>
        <IsLoadingAndEditingProvider>
          <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="Home" component={HomeScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </IsLoadingAndEditingProvider>
      </UserProvider>
    </PaperProvider>
  );
}
