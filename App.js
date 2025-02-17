import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Recipe from "./screens/Recipe.archive";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IsLoadingAndEditingProvider } from "./context/IsLoadingAndEditingContext";
import { UserProvider, useUser } from "./context/UserContext";

import { Provider as PaperProvider } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RecipesScreen from "./screens/RecipesScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import LoginScreen from "./screens/LoginScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { RecipeValidationProvider } from "./context/RecipeValidationContext";

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
        component={RecipesScreen}
        options={{
          title: "Home Page",
          tabBarIcon: ({ color, size }) => {
            return (
              <AntDesign name="home" size={size} color={color}></AntDesign>
            );
          },
        }}
      />
      <Tab.Screen
        name="addRecipe"
        component={AddRecipeScreen}
        options={{
          title: "Add recipe",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="add-circle-sharp"
                size={size}
                color={color}
              ></Ionicons>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Add Recipe" component={AddRecipeScreen} />
    <Drawer.Screen name="Favourites" component={FavouritesScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
  </Drawer.Navigator>
);

const DrawerSignedOut = createDrawerNavigator();

const DrawerSignedOutNavigator = () => (
  <DrawerSignedOut.Navigator>
    <DrawerSignedOut.Screen name="Home" component={RecipesScreen} />
    <DrawerSignedOut.Screen name="Login" component={LoginScreen} />
    <DrawerSignedOut.Screen name="SignUp" component={SignUpScreen} />
  </DrawerSignedOut.Navigator>
);

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator
    screenOptions={{ headerTransparent: true, headerShown: false }}
  >
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen name="Favourites" component={FavouritesScreen} />
  </ProfileStack.Navigator>
);

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: true }}>
      <AuthStack.Screen name="Home" component={HomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="Recipe" component={DrawerSignedOutNavigator} />
    </AuthStack.Navigator>
  );
};

function AppNavigator() {
  const { user } = useUser(); // Now this can access user from context

  return (
    <>
      {user ? (
        // If user is logged in, show the DrawerNavigator
        <DrawerNavigator />
      ) : (
        // If user is not logged in, show the AuthStackNavigator
        <AuthStackNavigator />
      )}
    </>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <UserProvider>
        <IsLoadingAndEditingProvider>
          <RecipeValidationProvider>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </RecipeValidationProvider>
        </IsLoadingAndEditingProvider>
      </UserProvider>
    </PaperProvider>
  );
}
