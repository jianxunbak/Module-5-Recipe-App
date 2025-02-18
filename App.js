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
import { IsLoadingAndEditingProvider } from "./Context/IsLoadingAndEditingContext";
import { RecipeProvider } from "./Context/RecipeContext";
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
        component={AuthStackNavigator}
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
      {/* <Tab.Screen
        name="camera screen"
        component={CameraScreen}
        options={{
          title: "Camera",
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome
                name="camera"
                size={size}
                color={color}
              ></FontAwesome>
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

//Drawer Navigator
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator>
    {/* <Drawer.Screen name="Home" component={TabNavigator} /> */}
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Favourites" component={FavouritesScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen
      name="Recipes"
      component={RecipeStackNavigator}
      headerShown={false}
      options={{ drawerItemStyle: { display: "none" } }}
    />
  </Drawer.Navigator>
);

//Stack Navigator
const RecipeStack = createStackNavigator();
const RecipeStackNavigator = () => (
  <RecipeStack.Navigator screenOptions={{ headerTransparent: true }}>
    <RecipeStack.Screen name="All Recipes" component={RecipesScreen} />
    <RecipeStack.Screen name="Recipe card" component={RecipeCardScreen} />
    <RecipeStack.Screen name="Edit Recipes" component={EditRecipeScreen} />
    <RecipeStack.Screen name="Camera" component={CameraScreen} />
  </RecipeStack.Navigator>
);

// Auth Stack Navigator
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
          <AuthStack.Screen name="Recipe card" component={RecipeCardScreen} />
          <AuthStack.Screen name="SignUp" component={SignUpScreen} />
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
          <FavoriteProvider>
            <RecipeProvider>
              <RecipeValidationProvider>
                <NavigationContainer>
                  <DrawerNavigator />
                </NavigationContainer>
              </RecipeValidationProvider>
            </RecipeProvider>
          </FavoriteProvider>
        </IsLoadingAndEditingProvider>
      </UserProvider>
    </PaperProvider>
  );
}
