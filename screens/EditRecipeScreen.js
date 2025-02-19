import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddRecipeStyles from "../styles/AddRecipeStyles";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RecipeValidationContext } from "../Context/RecipeValidationContext";
import recipeApi from "../api/recipeApi";
import { useIsLoadingAndEditing } from "../Context/IsLoadingandEditingContext";
import Feather from "@expo/vector-icons/Feather";
import { recipeContext } from "../Context/RecipeContext";
import { ActivityIndicator } from "react-native-paper";

export default EditRecipe = ({ route }) => {
  const navigate = useNavigation();
  const { selectedRecipe, photo } = route.params;
  const { isLoading, setIsLoading, isEditing, setIsEditing } =
    useIsLoadingAndEditing();

  const { recipeToEdit, setRecipeToEdit } = useContext(recipeContext);

  useEffect(() => {
    if (selectedRecipe) {
      setRecipeToEdit({
        id: selectedRecipe.id,
        imgSrc: photo ? photo || "" : selectedRecipe.imgSrc || "",
        title: selectedRecipe.title || "",
        description: selectedRecipe.description || "",
        ingredients: selectedRecipe.ingredients || [""],
        steps: selectedRecipe.steps || [""],
      });
    }
  }, [selectedRecipe, photo]);

  const {
    validateRealTimeField,
    validationOnSubmit,
    formErrors,
    setFormErrors,
  } = useContext(RecipeValidationContext);

  const addItem = (type) => {
    if (type === "ingredients") {
      setRecipeToEdit((prevRecipe) => ({
        ...prevRecipe,
        ingredients: [...prevRecipe.ingredients, ""],
      }));
    } else if (type === "steps") {
      setRecipeToEdit((prevRecipe) => ({
        ...prevRecipe,
        steps: [...prevRecipe.steps, ""],
      }));
    }
  };

  const removeItem = (type, index) => {
    if (type === "ingredients") {
      setRecipeToEdit((prevRecipe) => {
        const updatedIngredients = [...prevRecipe.ingredients];
        updatedIngredients.splice(index, 1);
        return {
          ...prevRecipe,
          ingredients: updatedIngredients,
        };
      });
    } else if (type === "steps") {
      setRecipeToEdit((prevRecipe) => {
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
    setRecipeToEdit({
      imgSrc: "",
      title: "",
      description: "",
      ingredients: [""],
      steps: [""],
    });
    navigate.navigate("All Recipes");
  };

  const handleInput = (name, value, index = null) => {
    // update the newRecipe state
    setRecipeToEdit((prevRecipe) => {
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
    validateRealTimeField(name, value, index, recipeToEdit);
  };

  const handleEditRecipe = async () => {
    const valid = validationOnSubmit(recipeToEdit);
    if (!valid) {
      // setIsLoading(false);
      alert("form not complete");
      return;
    }
    try {
      // setIsLoading(true);
      const response = await recipeApi.put(
        `/recipe/${recipeToEdit.id}`,
        recipeToEdit
      );
      if (response.status === 200) {
        alert(
          `item added:\nTitle: ${recipeToEdit.title}\nDescription: ${recipeToEdit.description}\nIngredients: ${recipeToEdit.ingredients}\nRecipe: ${recipeToEdit.steps}`
        );
        navigate.navigate("All Recipes");
      }
    } catch (error) {
      console.error("Error editing recipe:", error);
      alert("Error editing recipe:", error);
    } finally {
      setRecipeToEdit({
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
        <Text style={AddRecipeStyles.title}>Edit Recipe</Text>

        {isLoading ? (
          <View>
            <Text>Editing Recipe...</Text>
            <ActivityIndicator animating={true} color="#6200ee" />
          </View>
        ) : (
          <>
            <View style={AddRecipeStyles.MainContainer}>
              <Text style={AddRecipeStyles.subTitle}>Recipe Details</Text>
              <View style={AddRecipeStyles.input}>
                <Text style={AddRecipeStyles.label}>Title:</Text>
                <TextInput
                  style={AddRecipeStyles.textInput}
                  value={recipeToEdit.title}
                  onChangeText={(updatedTitle) =>
                    handleInput("title", updatedTitle)
                  }
                />
              </View>
              {formErrors.title && (
                <Text style={AddRecipeStyles.formError}>
                  {String(formErrors.title)}
                </Text>
              )}
              <View style={AddRecipeStyles.input}>
                <Text style={AddRecipeStyles.label}>Description:</Text>
                <TextInput
                  style={AddRecipeStyles.textInput}
                  value={recipeToEdit.description}
                  onChangeText={(updatedDescription) =>
                    handleInput("description", updatedDescription)
                  }
                />
              </View>
              {formErrors.description && (
                <Text style={AddRecipeStyles.formError}>
                  {String(formErrors.description)}
                </Text>
              )}
              <View style={AddRecipeStyles.input}>
                <Text style={AddRecipeStyles.label}>Image:</Text>
                <View style={AddRecipeStyles.inputSideButton}>
                  <TextInput
                    style={AddRecipeStyles.textInputWithButton}
                    value={recipeToEdit.imgSrc}
                    onChangeText={(updatedImage) =>
                      handleInput("imgSrc", updatedImage)
                    }
                  />
                  <TouchableOpacity
                    style={AddRecipeStyles.buttonAtInput}
                    onPress={() => {
                      navigate.navigate("Camera", {
                        returnTo: "editRecipe",
                      });
                    }}
                  >
                    <Text style={AddRecipeStyles.buttonText}>
                      <Feather name="camera" size={20} color={"white"} />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {formErrors.imgSrc && (
                <Text style={AddRecipeStyles.formError}>
                  {String(formErrors.imgSrc)}
                </Text>
              )}
            </View>
            <View style={AddRecipeStyles.MainContainer}>
              <View style={AddRecipeStyles.subtitleContainer}>
                <Text style={AddRecipeStyles.subTitle}>Ingredients</Text>
                <TouchableOpacity
                  style={AddRecipeStyles.addButton}
                  onPress={() => {
                    addItem("ingredients");
                  }}
                >
                  <Text style={AddRecipeStyles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={AddRecipeStyles.list}>
                {recipeToEdit.ingredients.map((ingredients, index) => (
                  <View key={index} style={AddRecipeStyles.input}>
                    <Text style={AddRecipeStyles.label}>
                      Ingredient {index + 1}:
                    </Text>
                    <View style={AddRecipeStyles.inputSideButton}>
                      <TextInput
                        style={AddRecipeStyles.textInputWithButton}
                        value={ingredients}
                        onChangeText={(updatedIngredients) =>
                          handleInput("ingredients", updatedIngredients, index)
                        }
                      />
                      <TouchableOpacity
                        style={AddRecipeStyles.buttonAtInput}
                        onPress={() => {
                          removeItem("ingredients", index);
                        }}
                      >
                        <Text style={AddRecipeStyles.buttonText}>-</Text>
                      </TouchableOpacity>
                    </View>
                    {formErrors.ingredients?.[index] && (
                      <Text style={AddRecipeStyles.formError}>
                        {String(formErrors.ingredients[index])}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            </View>
            <View style={AddRecipeStyles.MainContainer}>
              <View style={AddRecipeStyles.subtitleContainer}>
                <Text style={AddRecipeStyles.subTitle}>Steps</Text>
                <TouchableOpacity
                  style={AddRecipeStyles.addButton}
                  onPress={() => {
                    addItem("steps");
                  }}
                >
                  <Text style={AddRecipeStyles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={AddRecipeStyles.list}>
                {recipeToEdit.steps.map((steps, index) => (
                  <View key={index} style={AddRecipeStyles.input}>
                    <Text style={AddRecipeStyles.label}>Step {index + 1}:</Text>
                    <View style={AddRecipeStyles.inputSideButton}>
                      <TextInput
                        style={AddRecipeStyles.textInputWithButton}
                        value={steps}
                        onChangeText={(updatedSteps) =>
                          handleInput("steps", updatedSteps, index)
                        }
                      />
                      <TouchableOpacity
                        style={AddRecipeStyles.buttonAtInput}
                        onPress={() => {
                          removeItem("steps", index);
                        }}
                      >
                        <Text style={AddRecipeStyles.buttonText}>-</Text>
                      </TouchableOpacity>
                    </View>
                    {formErrors.steps?.[index] && (
                      <Text style={AddRecipeStyles.formError}>
                        {String(formErrors.steps[index])}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            </View>
            <View style={AddRecipeStyles.buttons}>
              <TouchableOpacity
                style={AddRecipeStyles.button}
                onPress={() => handleEditRecipe()}
              >
                <Text style={AddRecipeStyles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={AddRecipeStyles.button}
                onPress={() => handleCancel()}
              >
                <Text style={AddRecipeStyles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
