import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddRecipeStyles from "../styles/AddRecipeStyles";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RecipeValidationContext } from "../context/RecipeValidationContext";
import recipeApi from "../api/recipeApi";

export default AddRecipe = () => {
  const navigate = useNavigation();

  const {
    validateRealTimeField,
    validationOnSubmit,
    formErrors,
    setFormErrors,
  } = useContext(RecipeValidationContext);

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

  const handleCancel = () => {
    setRecipe({
      imgSrc: "",
      title: "",
      description: "",
      ingredients: [""],
      steps: [""],
    });
    navigate.navigate("Recipes", { screen: "Home" });
  };

  const handleInput = (name, value, index = null) => {
    // if (!value) return; // Avoid processing empty values

    // update the newRecipe state
    setRecipe((prevRecipe) => {
      let updatedRecipe = { ...prevRecipe };

      // Handle array fields like 'ingredients' and 'steps'
      if (name === "ingredients" || name === "steps") {
        const updatedArray = [...prevRecipe[name]]; // Create a copy of the array

        if (index !== null) {
          updatedArray[index] = value; // Update the specific index
        }

        updatedRecipe = {
          ...prevRecipe,
          [name]: updatedArray, // Update the array in state
        };
      } else {
        // for nonarray fields
        updatedRecipe = {
          ...prevRecipe,
          [name]: value,
        };
      }
      return updatedRecipe;
    });
    validateRealTimeField(name, value, index, recipe);
  };

  const handleAddRecipe = async () => {
    const valid = validationOnSubmit(recipe);
    if (!valid) {
      // setIsLoading(false);
      alert("form not complete");
      return;
    }
    try {
      // setIsLoading(true);
      const response = await recipeApi.post("/recipe", recipe);
      if (response.status === 201) {
        alert(
          `item added:\nTitle: ${recipe.title}\nDescription: ${recipe.description}\nIngredients: ${recipe.ingredients}\nRecipe: ${recipe.steps}`
        );
        navigate.navigate("Recipes", { screen: "Home" });
      }
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Error adding recipe:", error);
    } finally {
      setRecipe({
        imgSrc: "",
        title: "",
        description: "",
        ingredients: [""],
        steps: [""],
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
            <TextInput
              style={AddRecipeStyles.textInput}
              value={recipe.title}
              onChangeText={(updatedTitle) =>
                handleInput("title", updatedTitle)
              }
            />
          </View>
          {formErrors.title && (
            <Text style={AddRecipeStyles.formError}>{formErrors.title}</Text>
          )}
          <View style={AddRecipeStyles.input}>
            <Text style={AddRecipeStyles.label}>Description:</Text>
            <TextInput
              style={AddRecipeStyles.textInput}
              value={recipe.description}
              onChangeText={(updatedDescription) =>
                handleInput("description", updatedDescription)
              }
            />
          </View>
          {formErrors.description && (
            <Text style={AddRecipeStyles.formError}>
              {formErrors.description}
            </Text>
          )}
          <View style={AddRecipeStyles.input}>
            <Text style={AddRecipeStyles.label}>Image:</Text>
            <TextInput
              style={AddRecipeStyles.textInput}
              value={recipe.imgSrc}
              onChangeText={(updatedImage) =>
                handleInput("imgSrc", updatedImage)
              }
            />
          </View>
          {formErrors.imgSrc && (
            <Text style={AddRecipeStyles.formError}>{formErrors.imgSrc}</Text>
          )}
          <View style={AddRecipeStyles.list}>
            {recipe.ingredients.map((ingredients, index) => (
              <View key={index} style={AddRecipeStyles.input}>
                <Text style={AddRecipeStyles.label}>
                  Ingredient {index + 1}:
                </Text>
                <TextInput
                  style={AddRecipeStyles.textInputWithButton}
                  value={ingredients}
                  onChangeText={(updatedIngredients) =>
                    handleInput("ingredients", updatedIngredients, index)
                  }
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
                    style={AddRecipeStyles.buttonAtInput}
                    onPress={() => {
                      addItem("ingredients");
                    }}
                  >
                    <Text style={AddRecipeStyles.buttonText}>+</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
            {formErrors.ingredients && (
              <Text style={AddRecipeStyles.formError}>
                {formErrors.ingredients}
              </Text>
            )}
          </View>

          <View style={AddRecipeStyles.list}>
            {recipe.steps.map((steps, index) => (
              <View key={index} style={AddRecipeStyles.input}>
                <Text style={AddRecipeStyles.label}>Step {index + 1}:</Text>
                <TextInput
                  style={AddRecipeStyles.textInputWithButton}
                  value={steps}
                  onChangeText={(updatedSteps) =>
                    handleInput("steps", updatedSteps, index)
                  }
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
                    style={AddRecipeStyles.buttonAtInput}
                    onPress={() => {
                      addItem("steps");
                    }}
                  >
                    <Text style={AddRecipeStyles.buttonText}>+</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
            {formErrors.steps && (
              <Text style={AddRecipeStyles.formError}>{formErrors.steps}</Text>
            )}
          </View>
        </View>
        <View style={AddRecipeStyles.buttons}>
          <TouchableOpacity
            style={AddRecipeStyles.button}
            onPress={() => handleAddRecipe()}
          >
            <Text style={AddRecipeStyles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={AddRecipeStyles.button}
            onPress={() => handleCancel()}
          >
            <Text style={AddRecipeStyles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
