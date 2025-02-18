import { createContext, useState } from "react";
import recipeApi from "../api/recipeApi";
import { useIsLoadingAndEditing } from "./IsLoadingAndEditingContext";

export const recipeContext = createContext();

export function RecipeProvider({ children }) {
  const { setIsLoading } = useIsLoadingAndEditing();
  const [allRecipes, setAllRecipes] = useState([]);

  const [recipeToEdit, setRecipeToEdit] = useState({
    imgSrc: "",
    title: "",
    description: "",
    ingredients: [""],
    steps: [""],
  });

  const [recipeToAdd, setRecipeToAdd] = useState({
    imgSrc: "",
    title: "",
    description: "",
    ingredients: [""],
    steps: [""],
  });

  const getAllRecipes = async () => {
    setIsLoading(true);
    try {
      const response = await recipeApi.get("/recipe");
      setAllRecipes(response.data);
    } catch (error) {
      console.error("Error getting recipes:", error);
      alert("Error getting all recipes");
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue = {
    recipeToEdit,
    setRecipeToEdit,
    recipeToAdd,
    setRecipeToAdd,
    allRecipes,
    setAllRecipes,
    getAllRecipes,
  };

  return (
    <recipeContext.Provider value={contextValue}>
      {children}
    </recipeContext.Provider>
  );
}
