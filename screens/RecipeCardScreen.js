import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RecipeCardStyles from "../styles/RecipeCardStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import recipeApi from "../api/recipeApi";
import { favoriteContext } from "../Context/FavouritesContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useContext } from "react";

export default RecipeCardScreen = ({ route }) => {
  const { selectedRecipe } = route.params;
  const navigate = useNavigation();
  const { favorites, toggleFavorite } = useContext(favoriteContext);

  const handleEditRecipe = () => {
    navigate.navigate("Edit Recipes", { selectedRecipe: selectedRecipe });
  };

  const handleDelete = () => {
    console.log(selectedRecipe.id);
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this recipe?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Ok",
          onPress: async () => {
            try {
              console.log("Deleting recipe:", selectedRecipe.id);
              console.log(selectedRecipe.id);
              const response = await recipeApi.delete(
                `/recipe/${String(selectedRecipe.id)}`
              );
              console.log("Delete response:", response.status);

              if (response.status === 200 || response.status === 204) {
                alert(`item deleted:\nTitle: ${response.data.title}`);
                navigate.navigate("Home", { screen: "All Recipes" });
              }
            } catch (error) {
              console.error("Error deleting recipe:", error);
              alert("Error deleting recipe:", error);
            }
          },
        },
      ]
    );
  };

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
          <Text style={RecipeCardStyles.description}>
            {selectedRecipe.cuisine} cusine
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
        <View style={RecipeCardStyles.buttonContainer}>
          <TouchableOpacity
            style={RecipeCardStyles.button}
            onPress={() => handleEditRecipe()}
          >
            <Text style={RecipeCardStyles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={RecipeCardStyles.button}
            onPress={() => handleDelete()}
          >
            <Text style={RecipeCardStyles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={RecipeCardStyles.button}
            onPress={() => navigate.goBack()}
          >
            <Text style={RecipeCardStyles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavorite(selectedRecipe.id)}>
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
      </ScrollView>
    </SafeAreaView>
  );
};
