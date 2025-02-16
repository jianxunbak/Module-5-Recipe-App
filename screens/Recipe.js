import { FlatList, Image, ScrollView, Text, View } from "react-native";
import RecipeStyles from "../styles/RecipeStyles";
import sampleRecipe from "./SampleRecipes";
import { SafeAreaView } from "react-native-safe-area-context";

export default Recipe = () => {
  const selectedRecipe = sampleRecipe[0];

  return (
    <SafeAreaView>
      <ScrollView style={RecipeStyles.scrollView}>
        <View style={RecipeStyles.MainContainer}>
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
        </View>

        <View style={RecipeStyles.subContainer}>
          <View>
            <Text style={RecipeStyles.subTitle}>INGREDIENTS</Text>
            <FlatList
              data={selectedRecipe.ingredients}
              renderItem={({ item, index }) => (
                <Text style={RecipeStyles.list}>
                  {index + 1}. {item}
                </Text>
              )}
            />
          </View>
        </View>
        <View style={RecipeStyles.subContainer}>
          <Text style={RecipeStyles.subTitle}>Steps</Text>
          <FlatList
            data={selectedRecipe.steps}
            renderItem={({ item, index }) => (
              <Text style={RecipeStyles.list}>
                Step {index + 1}: {item}
              </Text>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
