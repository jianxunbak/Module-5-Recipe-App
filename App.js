import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { UserProvider, useUser } from "./Context/UserContext.js";
import { RecipeValidationProvider } from "./Context/RecipeValidationContext.js";

import { Provider as PaperProvider } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

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
import EditProfileScreen from "./screens/EditProfileScreen.js";
import { LoginProvider, useLogin } from "./Context/LoginContext.js";

// Auth Stack Navigator
const AuthStackNavigator = () => {
  const { login } = useLogin(); // Check if user is logged in
  const AuthStack = createStackNavigator(); // Define the StackNavigator here

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      {login ? (
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
        name="AuthStackNavigator"
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
    </Tab.Navigator>
  );
};

//Drawer Navigator
const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  const { setUser } = useUser();
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Home"
        icon={() => <FontAwesome name="home" size={24} color={"purple"} />}
        onPress={() => navigation.navigate("Home")} // Navigate to Home screen
        inactiveTintColor="purple"
        activeTintColor="grey"
      />
      <DrawerItem
        label="Favourites"
        icon={() => <FontAwesome name="star" size={24} color={"purple"} />}
        onPress={() => navigation.navigate("Favourites")} // Navigate to Favourites screen
        inactiveTintColor="purple"
        activeTintColor="grey"
      />
      <DrawerItem
        label="Profile"
        icon={() => <FontAwesome name="user" size={24} color={"purple"} />}
        onPress={() => navigation.navigate("Profile")} // Navigate to Profile screen
        inactiveTintColor="purple"
        activeTintColor="grey"
      />
      <DrawerItem
        label="Logout"
        icon={() => <FontAwesome name="sign-out" size={24} color={"purple"} />}
        onPress={() => {
          // Handle Logout functionality
          console.log("Logging out...");
          setUser(null);
          navigation.navigate("Home");
        }}
        inactiveTintColor="purple"
        activeTintColor="grey"
      />
    </DrawerContentScrollView>
  );
}
const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Favourites" component={FavouritesScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="editProfile" component={EditProfileScreen} />
    <Drawer.Screen
      name="Recipes"
      component={RecipeStackNavigator}
      headerShown={false}
      options={{ drawerItemStyle: { display: "none" } }}
    />
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
      <AuthStack.Screen
        name="Recipe"
        component={DrawerSignedOutNavigator}
        options={{ headerShown: false }}
      />
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
  <RecipeStack.Navigator
    screenOptions={{ headerTransparent: true, headerShown: false }}
  >
    <RecipeStack.Screen name="All Recipes" component={RecipesScreen} />
    <RecipeStack.Screen name="Recipe card" component={RecipeCardScreen} />
    <RecipeStack.Screen name="Edit Recipes" component={EditRecipeScreen} />
    <RecipeStack.Screen name="Camera" component={CameraScreen} />
  </RecipeStack.Navigator>
);

export default function App() {
  return (
    <PaperProvider>
      <LoginProvider>
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
      </LoginProvider>
    </PaperProvider>
  );
}
