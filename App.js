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
import RecipeCardScreen from "./screens/RecipeCardScreen";
import CameraScreen from "./screens/CameraScreen";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
        name="Recipes"
        component={RecipesScreen}
        options={{
          title: "Recipes",
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
      /> */}

      <Tab.Screen
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
      />
    </Tab.Navigator>
  );
};
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

const RecipeStack = createStackNavigator();

const RecipeStackNavigator = () => (
  <RecipeStack.Navigator screenOptions={{ headerTransparent: true }}>
    <RecipeStack.Screen name="All Recipes" component={RecipesScreen} />
    <RecipeStack.Screen name="Recipe card" component={RecipeCardScreen} />
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
          <AuthStack.Screen name="Recipe card" component={RecipeCardScreen} />
          <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </AuthStack.Navigator>
  );
};

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const TabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Recipe"
          component={Recipe}
          options={{
            title: "recipe",
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="food-variant"
                  size={size}
                  color={color}
                />
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Add Recipe"
          component={AddRecipe}
          options={{
            title: "Add Recipe",
            tabBarIcon: ({ size, color }) => {
              return (
                <Ionicons name="add-circle-sharp" size={size} color={color} />
              );
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  };

  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <PaperProvider>
      <UserProvider>
        <IsLoadingAndEditingProvider>
          <RecipeValidationProvider>
            <NavigationContainer>
              <DrawerNavigator />
            </NavigationContainer>
          </RecipeValidationProvider>
        </IsLoadingAndEditingProvider>
      </UserProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
