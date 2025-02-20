import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { UserProvider, useUser } from "./Context/UserContext.js";
import { RecipeValidationProvider } from "./Context/RecipeValidationContext.js";
import { LoginProvider, useLogin } from "./Context/LoginContext.js";
import { IsLoadingAndEditingProvider } from "./Context/IsLoadingAndEditingContext.js";
import { RecipeProvider } from "./Context/RecipeContext.js";
import { FavoriteProvider } from "./Context/FavouritesContext.js";

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
import EditProfileScreen from "./screens/EditProfileScreen.js";
import LocationScreen from "./screens/LocationScreen.js";
import { LocationProvider } from "./Context/LocationContext.js";
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
        name="HomePage"
        component={HomeScreen}
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
        name="All Recipes"
        component={RecipesScreen}
        options={{
          title: "All Recipes",
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome6
                name="bowl-food"
                size={size}
                color={color}
              ></FontAwesome6>
            );
          },
        }}
      />
      <Tab.Screen
        name="addRecipe"
        component={RecipeStackNavigator}
        options={{
          headerShown: false,
          title: "Add recipe",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="add-circle" size={size} color={color}></Ionicons>
            );
          },
        }}
      />
      <Tab.Screen
        name="location"
        component={LocationScreen}
        options={{
          headerShown: false,
          title: "location",
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome name="map" size={size} color={color}></FontAwesome>
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
  const { setLogin } = useLogin();
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Home"
        icon={() => <FontAwesome name="home" size={24} color={"purple"} />}
        onPress={() => navigation.navigate("Home", { screen: "HomePage" })} // Navigate to Home screen
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
          setLogin(false);
          setUser({
            username: "",
            id: "",
            email: "",
            memberSince: "",
            about: "",
            profilePic: "",
            password: "",
          });
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
    <Drawer.Screen
      name="Home"
      component={TabNavigator}
      options={{
        headerTransparent: true,
        headerTitle: "",
        drawerItemStyle: { display: "none" },
      }}
    />
    <Drawer.Screen
      name="Favourites"
      component={FavouritesScreen}
      options={{
        headerTransparent: true,
        headerTitle: "",
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerTransparent: true,
        headerTitle: "",
      }}
    />
    <Drawer.Screen name="editProfile" component={EditProfileScreen} />
    <Drawer.Screen
      name="Recipes"
      component={RecipeStackNavigator}
      headerShown={false}
      options={{
        drawerItemStyle: { display: "none" },
        headerTitle: "",
        headerTransparent: true,
      }}
    />
  </Drawer.Navigator>
);

const RecipeStack = createStackNavigator();
const RecipeStackNavigator = () => (
  <RecipeStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerShown: true,
    }}
  >
    <RecipeStack.Screen
      name="Add Recipes"
      component={AddRecipeScreen}
      options={{ headerShown: false }}
    />
    {/* <RecipeStack.Screen name="All Recipes" component={RecipesScreen} /> */}
    <RecipeStack.Screen
      name="Recipe card"
      component={RecipeCardScreen}
      options={{
        headerShown: false,
      }}
    />
    <RecipeStack.Screen
      name="Edit Recipes"
      component={EditRecipeScreen}
      options={{
        headerShown: false,
      }}
    />
    <RecipeStack.Screen
      name="Camera"
      component={CameraScreen}
      options={{
        headerShown: true,
        headerTitle: "",
        headerStyle: {
          height: 250,
        },
        headerTintColor: "black", // Makes sure the back button is visible
      }}
    />
  </RecipeStack.Navigator>
);

// Screen that will show when user is not login
const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerTitle: "", headerTransparent: true }}
    >
      <AuthStack.Screen name="Home" component={HomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

// Shows different Navigator depending  if user is login
const AppNavigator = () => {
  const { login } = useLogin();
  return login ? <DrawerNavigator /> : <AuthStackNavigator />;
};
export default function App() {
  return (
    <PaperProvider>
      <LoginProvider>
        <LocationProvider>
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
        </LocationProvider>
      </LoginProvider>
    </PaperProvider>
  );
}
