import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { UserProvider, useUser } from "./Context/UserContext.js";
import { RecipeValidationProvider } from "./Context/RecipeValidationContext.js";

import { Provider as PaperProvider } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RecipesScreen from "./screens/RecipesScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import LoginScreen from "./screens/LoginScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import RecipeCardScreen from "./screens/RecipeCardScreen";
import CameraScreen from "./screens/CameraScreen";
import EditRecipeScreen from "./screens/EditRecipeScreen.js";
import { IsLoadingAndEditingProvider } from "./Context/IsLoadingandEditingContext.js";
import { RecipeProvider } from "./Context/RecipeContext.js";
import { FavoriteProvider } from "./Context/FavouritesContext.js";

//Tab Navigator
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
        component={RecipeStackNavigator}
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

//Drawer Navigator
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

const RecipeStack = createStackNavigator();
const RecipeStackNavigator = () => (
  <RecipeStack.Navigator screenOptions={{ headerTransparent: true }}>
    <RecipeStack.Screen name="All Recipes" component={RecipesScreen} />
    <RecipeStack.Screen name="Recipe card" component={RecipeCardScreen} />
    <RecipeStack.Screen name="Edit Recipes" component={EditRecipeScreen} />
    <RecipeStack.Screen name="Camera" component={CameraScreen} />
  </RecipeStack.Navigator>
);

export default function App() {
  return (
    <PaperProvider>
      <UserProvider>
        <IsLoadingAndEditingProvider>
          <FavoriteProvider>
            <RecipeProvider>
              <RecipeValidationProvider>
                <NavigationContainer>
                  <AppNavigator />
                </NavigationContainer>
              </RecipeValidationProvider>
            </RecipeProvider>
          </FavoriteProvider>
        </IsLoadingAndEditingProvider>
      </UserProvider>
    </PaperProvider>
  );
}
