import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import { IsLoadingAndEditingProvider } from "./context/IsLoadingAndEditingContext";
import { UserProvider, useUser } from "./context/UserContext";

import { Provider as PaperProvider } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles/styles";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RecipesScreen from "./screens/RecipesScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import LoginScreen from "./screens/LoginScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={AuthStackNavigator}
        options={{
          title: "Home Page",
          tabBarIcon: ({ color, size }) => {
            return (
              <AntDesign name="home" size={size} color={color}></AntDesign>
            );
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    {/* <Drawer.Screen name="Home" component={TabNavigator} /> */}
    <Drawer.Screen name="Recipes" component={TabNavigator} />
    <Drawer.Screen name="Favourites" component={FavouritesScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

const RecipeStack = createStackNavigator();

const RecipeStackNavigator = () => (
  <RecipeStack.Navigator screenOptions={{ headerTransparent: true }}>
    <RecipeStack.Screen name="Recipes" component={RecipesScreen} />
    <RecipeStack.Screen name="Add Recipe" component={AddRecipeScreen} />
  </RecipeStack.Navigator>
);

const AuthStackNavigator = () => {
  const { user } = useUser(); // Check if user is logged in
  const AuthStack = createStackNavigator(); // Define the StackNavigator here

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <AuthStack.Screen name="Recipes" component={DrawerNavigator} />
      ) : (
        <>
          <AuthStack.Screen name="Home" component={HomeScreen} />
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Recipes" component={RecipesScreen} />
        </>
      )}
    </AuthStack.Navigator>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <UserProvider>
        <IsLoadingAndEditingProvider>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </IsLoadingAndEditingProvider>
      </UserProvider>
    </PaperProvider>
  );
}
