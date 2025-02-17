import { Image, ScrollView, Text, TextInput, View } from "react-native";
import RecipeCardStyles from "../styles/RecipeCardStyles";
import { SafeAreaView } from "react-native-safe-area-context";

export default RecipeCardScreen = ({ route }) => {
  // const selectedRecipe = sampleRecipe[0];
  const { selectedRecipe } = route.params;

  return (
    <SafeAreaView>
      <ScrollView style={RecipeCardStyles.scrollView}>
        <View style={RecipeCardStyles.MainContainer}>
          <Image
            source={{ uri: selectedRecipe.imgSrc }}
            style={RecipeCardStyles.image}
          />
          <Text style={RecipeCardStyles.title}>
            {selectedRecipe.title.toUpperCase()}
          </Text>
          <Text style={RecipeCardStyles.description}>
            {selectedRecipe.description}
          </Text>
          <View style={RecipeCardStyles.subContainer}>
            <Text style={RecipeCardStyles.subTitle}>INGREDIENTS</Text>
            <View>
              {selectedRecipe.ingredients.map((item, index) => {
                return (
                  <View key={index} style={RecipeCardStyles.list}>
                    <Text style={RecipeCardStyles.listIndex}>{index + 1}:</Text>
                    <Text style={RecipeCardStyles.listDetail}>{item}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={RecipeCardStyles.subContainer}>
            <Text style={RecipeCardStyles.subTitle}>Steps</Text>
            <View>
              {selectedRecipe.steps.map((item, index) => {
                return (
                  <View key={index} style={RecipeCardStyles.list}>
                    <Text style={RecipeCardStyles.listIndex}>{index + 1}:</Text>
                    <Text style={RecipeCardStyles.listDescription}>{item}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
