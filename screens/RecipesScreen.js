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
import { useCallback, useContext, useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useIsLoadingAndEditing } from "../Context/IsLoadingAndEditingContext";
import { recipeContext } from "../Context/RecipeContext.js";
import { favoriteContext } from "../Context/FavouritesContext.js";
import { ActivityIndicator } from "react-native-paper";

export default RecipesScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const navigate = useNavigation();
  const { isLoading, setIsLoading, isEditing, setIsEditing } =
    useIsLoadingAndEditing();
  const { allRecipes, setAllRecipes, getAllRecipes } =
    useContext(recipeContext);
  const { favorites, toggleFavorite } = useContext(favoriteContext);
  useFocusEffect(
    useCallback(() => {
      getAllRecipes();
    }, [])
  );

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
    <SafeAreaView style={RecipeStyles.SafeAreaView}>
      <Text style={RecipeStyles.MainTitle}>Recipes</Text>
      <TextInput
        style={RecipeStyles.searchBar}
        placeholder="Search recipes..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <View style={RecipeStyles.picker}>
        <RNPickerSelect
          onValueChange={setSelectedCuisine}
          items={[
            { label: "All Cuisines", value: "" },
            ...cuisines.map((cuisine) => ({ label: cuisine, value: cuisine })),
          ]}
          style={{
            placeholder: {
              fontSize: 16,
              color: "grey",
            },
          }}
          placeholder={{ label: "Select Cuisines", value: "" }}
        />
      </View>

      {isLoading ? (
        <View>
          <Text style={RecipeStyles.text}>Fetching Recipes...</Text>
          <ActivityIndicator animating={true} color="#6200ee" />
        </View>
      ) : (
        <ScrollView>
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
                      <TouchableOpacity
                        onPress={() => toggleFavorite(selectedRecipe.id)}
                      >
                        {favorites.includes(selectedRecipe.id) ? (
                          <FontAwesome
                            name="heart"
                            size={25}
                            color={"purple"}
                          ></FontAwesome>
                        ) : (
                          <FontAwesome
                            name="heart-o"
                            size={25}
                            color={"purple"}
                          ></FontAwesome>
                        )}
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
            <Text style={RecipeStyles.text}>No recipes found</Text>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
