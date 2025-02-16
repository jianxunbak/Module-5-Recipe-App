import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddRecipeStyles from "../styles/AddRecipeStyles";
import { useState } from "react";

export default AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    imgSrc: "",
    title: "",
    description: "",
    ingredients: [""],
    steps: [""],
  });

  const addItem = (type) => {
    if (type === "ingredients") {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        ingredients: [...prevRecipe.ingredients, ""],
      }));
    } else if (type === "steps") {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        steps: [...prevRecipe.steps, ""],
      }));
    }
  };

  const removeItem = (type, index) => {
    if (type === "ingredients") {
      setRecipe((prevRecipe) => {
        const updatedIngredients = [...prevRecipe.ingredients];
        updatedIngredients.splice(index, 1);
        return {
          ...prevRecipe,
          ingredients: updatedIngredients,
        };
      });
    } else if (type === "steps") {
      setRecipe((prevRecipe) => {
        const updatedSteps = [...prevRecipe.steps];
        updatedSteps.splice(index, 1);
        return {
          ...prevRecipe,
          steps: updatedSteps,
        };
      });
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={AddRecipeStyles.scrollView}>
        <View style={AddRecipeStyles.MainContainer}>
          <Text style={AddRecipeStyles.title}>Add Recipe</Text>

          <View style={AddRecipeStyles.input}>
            <Text style={AddRecipeStyles.label}>Title:</Text>
            <TextInput style={AddRecipeStyles.textInput} value={recipe.title} />
          </View>
          <View style={AddRecipeStyles.input}>
            <Text style={AddRecipeStyles.label}>Description:</Text>
            <TextInput
              style={AddRecipeStyles.textInput}
              value={recipe.description}
            />
          </View>
          <View style={AddRecipeStyles.input}>
            <Text style={AddRecipeStyles.label}>Image:</Text>
            <TextInput
              style={AddRecipeStyles.textInput}
              value={recipe.imgSrc}
            />
          </View>
          <View style={AddRecipeStyles.list}>
            {recipe.ingredients.map((ingredients, index) => (
              <View key={index} style={AddRecipeStyles.input}>
                <Text style={AddRecipeStyles.label}>
                  Ingredient {index + 1}:
                </Text>
                <TextInput
                  style={AddRecipeStyles.textInputWithButton}
                  value={ingredients}
                />
                {index !== recipe.ingredients.length - 1 && (
                  <TouchableOpacity
                    style={AddRecipeStyles.buttonAtInput}
                    onPress={() => {
                      removeItem("ingredients", index);
                    }}
                  >
                    <Text style={AddRecipeStyles.buttonText}>-</Text>
                  </TouchableOpacity>
                )}
                {index === recipe.ingredients.length - 1 && (
                  <TouchableOpacity
                    style={AddRecipeStyles.button}
                    onPress={() => {
                      addItem("ingredients");
                    }}
                  >
                    <Text style={AddRecipeStyles.buttonText}>+</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>

          <View style={AddRecipeStyles.list}>
            {recipe.steps.map((steps, index) => (
              <View key={index} style={AddRecipeStyles.input}>
                <Text style={AddRecipeStyles.label}>Step {index + 1}:</Text>
                <TextInput
                  style={AddRecipeStyles.textInputWithButton}
                  value={steps}
                />

                {index !== recipe.steps.length - 1 && (
                  <TouchableOpacity
                    style={AddRecipeStyles.buttonAtInput}
                    onPress={() => {
                      removeItem("steps", index);
                    }}
                  >
                    <Text style={AddRecipeStyles.buttonText}>-</Text>
                  </TouchableOpacity>
                )}

                {index === recipe.steps.length - 1 && (
                  <TouchableOpacity
                    style={AddRecipeStyles.button}
                    onPress={() => {
                      addItem("steps");
                    }}
                  >
                    <Text style={AddRecipeStyles.buttonText}>+</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
