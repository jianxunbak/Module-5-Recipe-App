import { Image, ScrollView, Text, TextInput, View } from "react-native";
import RecipeStyles from "../styles/RecipeStyles";
import sampleRecipe from "../screens/SampleRecipes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";

export default Recipe = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const cuisines = [
    ...new Set(
      sampleRecipe
        .map((recipe) => recipe.cuisine)
        .filter((cuisine) => cuisine !== undefined && cuisine !== "")
    ),
  ];

  // filters the recipes based on the search term and selected cuisine
  const filteredRecipes = sampleRecipe.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCuisine === "" || recipe.cuisine === selectedCuisine)
  );

  return (
    <SafeAreaView>
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
            <View key={index} style={RecipeStyles.MainContainer}>
              <Image
                source={{ uri: selectedRecipe.imgSrc }}
                style={RecipeStyles.image}
              />
              <Text style={RecipeStyles.title}>
                {selectedRecipe.title.toUpperCase()}
              </Text>
              <Text style={RecipeStyles.description}>
                {selectedRecipe.description}
              </Text>
              <View style={RecipeStyles.subContainer}>
                <Text style={RecipeStyles.subTitle}>INGREDIENTS</Text>
                <View>
                  {selectedRecipe.ingredients.map((item, index) => {
                    return (
                      <View style={RecipeStyles.list}>
                        <Text key={index} style={RecipeStyles.listIndex}>
                          {index + 1}:
                        </Text>
                        <Text style={RecipeStyles.listDetail}>{item}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
              <View style={RecipeStyles.subContainer}>
                <Text style={RecipeStyles.subTitle}>Steps</Text>
                <View>
                  {selectedRecipe.steps.map((item, index) => {
                    return (
                      <View style={RecipeStyles.list}>
                        <Text key={index} style={RecipeStyles.listIndex}>
                          {index + 1}:
                        </Text>
                        <Text style={RecipeStyles.listDescription}>{item}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={RecipeStyles.noResults}>No recipes found</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
