import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RecipeStyles from "../styles/RecipeStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import recipeApi from "../api/recipeApi";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default RecipesScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [allRecipes, setAllRecipes] = useState([]);
  const navigate = useNavigation();

  // API to get all the recipes
  const getAllRecipes = async () => {
    try {
      const response = await recipeApi.get("/recipe");
      setAllRecipes(response.data);
    } catch (error) {
      console.error("Error getting recipes:", error);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  const cuisines = [
    ...new Set(
      allRecipes
        .map((recipe) => recipe.cuisine)
        .filter((cuisine) => cuisine !== undefined && cuisine !== "")
    ),
  ];

  // filters the recipes based on the search term and selected cuisine
  const filteredRecipes = allRecipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCuisine === "" || recipe.cuisine === selectedCuisine)
  );

  const handleNavigate = (selectedRecipe) => {
    navigate.navigate("Recipes", {
      screen: "Recipe card",
      params: { selectedRecipe: selectedRecipe },
    });
  };

  return (
    <SafeAreaView>
      <Text style={RecipeStyles.MainTitle}>Recipes</Text>
      <TextInput
        style={RecipeStyles.searchBar}
        placeholder="Search recipes..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <RNPickerSelect
        onValueChange={setSelectedCuisine}
        items={[
          { label: "All Cuisines", value: "" },
          ...cuisines.map((cuisine) => ({ label: cuisine, value: cuisine })),
        ]}
        style={{
          inputIOS: RecipeStyles.picker,
          inputAndroid: RecipeStyles.picker,
        }}
        placeholder={{ label: "Select Cuisine", value: "" }}
      />

      <ScrollView style={RecipeStyles.scrollView}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((selectedRecipe, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleNavigate(selectedRecipe);
              }}
            >
              <View style={RecipeStyles.MainContainer}>
                <View style={RecipeStyles.leftContainer}>
                  <View style={RecipeStyles.titleContainer}>
                    <Text style={RecipeStyles.title}>
                      {selectedRecipe.title.toUpperCase()}
                    </Text>
                    <Text style={RecipeStyles.description}>
                      {selectedRecipe.description}
                    </Text>
                  </View>
                  <View style={RecipeStyles.bottomContainer}>
                    <Text style={RecipeStyles.cusine}>
                      - {selectedRecipe.cuisine}
                    </Text>
                    <TouchableOpacity>
                      {/* {favorites.includes(selectedRecipe.id) ? ( */}
                      <FontAwesome
                        name="heart"
                        size={25}
                        color={"purple"}
                      ></FontAwesome>
                      {/* ) : (
                      <FontAwesome
                        name="heart-o"
                        size={25}
                        color={"purple"}
                      ></FontAwesome>
                    )} */}
                    </TouchableOpacity>
                  </View>
                </View>

                <Image
                  source={{ uri: selectedRecipe.imgSrc }}
                  style={RecipeStyles.image}
                />
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={RecipeStyles.noResults}>No recipes found</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
