import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddRecipeStyles from "../styles/AddRecipeStyles";
import { useCallback, useContext, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { RecipeValidationContext } from "../Context/RecipeValidationContext";
import recipeApi from "../api/recipeApi";
import Feather from "@expo/vector-icons/Feather";
import { useIsLoadingAndEditing } from "../Context/IsLoadingAndEditingContext";
import { recipeContext } from "../Context/RecipeContext";
import { ActivityIndicator } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LocationContext } from "../Context/LocationContext";

export default AddRecipe = ({ route }) => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const { setLocation, getCurrentLocation, location } =
    useContext(LocationContext);
  const { photo } = route.params || {};
  const { validateRealTimeField, validationOnSubmit, formErrors } = useContext(
    RecipeValidationContext
  );
  const { isLoading, setIsLoading, isEditing, setIsEditing } =
    useIsLoadingAndEditing();
  const { recipeToAdd, setRecipeToAdd } = useContext(recipeContext);

  useEffect(() => {
    if (photo) {
      setRecipeToAdd((prevRecipe) => ({
        ...prevRecipe,
        imgSrc: photo,
      }));
    }
  }, [photo]);

  useFocusEffect(
    useCallback(() => {
      const fetchLocation = async () => {
        console.log("fetching recipes");
        await getCurrentLocation();
      };
      fetchLocation();
    }, [])
  );
  useEffect(() => {
    console.log("useeffect called");
    console.log(location);
    if (location.city !== "Unknown city") {
      setRecipeToAdd((prevRecipe) => ({
        ...prevRecipe,
        city: location.city,
        latitude: location.latitude,
        longitude: location.longitude,
      }));
    }
  }, [location]);

  const addItem = (type) => {
    if (type === "ingredients") {
      setRecipeToAdd((prevRecipe) => ({
        ...prevRecipe,
        ingredients: [...prevRecipe.ingredients, ""],
      }));
    } else if (type === "steps") {
      setRecipeToAdd((prevRecipe) => ({
        ...prevRecipe,
        steps: [...prevRecipe.steps, ""],
      }));
    }
  };

  const removeItem = (type, index) => {
    if (type === "ingredients") {
      setRecipeToAdd((prevRecipe) => {
        const updatedIngredients = [...prevRecipe.ingredients];
        updatedIngredients.splice(index, 1);
        return {
          ...prevRecipe,
          ingredients: updatedIngredients,
        };
      });
    } else if (type === "steps") {
      setRecipeToAdd((prevRecipe) => {
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
    if (route.params?.photo) {
      route.params.photo = null;
    }
    setRecipeToAdd({
      imgSrc: "",
      title: "",
      description: "",
      ingredients: [""],
      steps: [""],
    });
    navigate("Home", { screen: "All Recipes" });
  };

  const handleInput = (name, value, index = null) => {
    // if (!value) return; // Avoid processing empty values

    // update the newRecipe state
    setRecipeToAdd((prevRecipe) => {
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
    validateRealTimeField(name, value, index, recipeToAdd);
  };

  const handleAddRecipe = async () => {
    const valid = validationOnSubmit(recipeToAdd);
    if (!valid) {
      // setIsLoading(false);
      alert("form not complete");
      return;
    }
    try {
      setIsLoading(true);
      // setIsLoading(true);
      const response = await recipeApi.post("/recipe", recipeToAdd);
      if (response.status === 201) {
        alert(
          `item added:\nTitle: ${recipeToAdd.title}\nDescription: ${recipeToAdd.description}\nIngredients: ${recipeToAdd.ingredients}\nRecipe: ${recipeToAdd.steps}`
        );
        navigate("Home", { screen: "All Recipes" });
      }
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Error adding recipe:", error);
    } finally {
      if (route.params?.photo) {
        route.params.photo = null;
      }
      setIsLoading(false);
      setRecipeToAdd({
        imgSrc: "",
        title: "",
        description: "",
        ingredients: [""],
        steps: [""],
      });
    }
  };

  return (
    <SafeAreaView style={AddRecipeStyles.SafeAreaView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={AddRecipeStyles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <View style={AddRecipeStyles.titleContainer}>
            <TouchableOpacity
              style={AddRecipeStyles.backArrow}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="return-down-back" size={25} color={"black"} />
            </TouchableOpacity>
            <Text style={AddRecipeStyles.title}>Add Recipe</Text>
          </View>

          {isLoading ? (
            <View style={AddRecipeStyles.loading}>
              <ActivityIndicator animating={true} color="#6200ee" />
            </View>
          ) : (
            <>
              <View style={AddRecipeStyles.MainContainer}>
                <Text style={AddRecipeStyles.subTitle}>Recipe Details</Text>
                <View style={AddRecipeStyles.input}>
                  <Text style={AddRecipeStyles.label}>City:</Text>
                  <Text style={AddRecipeStyles.textInput}>
                    {recipeToAdd.city}
                  </Text>
                </View>
                <View style={AddRecipeStyles.input}>
                  <Text style={AddRecipeStyles.label}>Title:</Text>
                  <TextInput
                    style={AddRecipeStyles.textInput}
                    value={recipeToAdd.title}
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
                    value={recipeToAdd.description}
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
                      value={recipeToAdd.imgSrc}
                      onChangeText={(updatedImage) =>
                        handleInput("imgSrc", updatedImage)
                      }
                    />
                    <TouchableOpacity
                      style={AddRecipeStyles.buttonAtInput}
                      onPress={() => {
                        navigate("Recipes", {
                          screen: "Camera",
                          params: { returnTo: "addRecipe" },
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
                  {recipeToAdd.ingredients.map((ingredients, index) => (
                    <View key={index} style={AddRecipeStyles.input}>
                      <Text style={AddRecipeStyles.label}>
                        Ingredient {index + 1}:
                      </Text>
                      <View style={AddRecipeStyles.inputSideButton}>
                        <TextInput
                          style={AddRecipeStyles.textInputWithButton}
                          value={ingredients}
                          onChangeText={(updatedIngredients) =>
                            handleInput(
                              "ingredients",
                              updatedIngredients,
                              index
                            )
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
                        <View>
                          <Text style={AddRecipeStyles.formError}>
                            {String(formErrors.ingredients[index])}
                          </Text>
                        </View>
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
                  {recipeToAdd.steps.map((steps, index) => (
                    <View key={index} style={AddRecipeStyles.input}>
                      <Text style={AddRecipeStyles.label}>
                        Step {index + 1}:
                      </Text>
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
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
