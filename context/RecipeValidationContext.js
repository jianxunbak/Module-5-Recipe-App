import Joi from "joi";
import { createContext, useState } from "react";

export const RecipeValidationContext = createContext();

export function RecipeValidationProvider({ children }) {
  const [formErrors, setFormErrors] = useState({
    imgSrc: "",
    title: "",
    description: "",
    ingredients: [],
    steps: [],
  });

  const schema = {
    imgSrc: Joi.string()
      .uri()
      .message("Please insert a valid URL")
      .regex(/\.(jpg|jpeg|png|gif|bmp|webp)$/i)
      .message("Invalid image URL")
      .required(),
    title: Joi.string()
      .min(3)
      .message("Title must be at least 3 characters long")
      .max(100)
      .message("Title cannot be more than 100 characters")
      .required(),
    description: Joi.string()
      .min(3)
      .message("Description must be at least 3 characters long")
      .max(200)
      .message("Description cannot be more than 200 characters")
      .required(),
    ingredients: Joi.string()
      .min(3)
      .message("Each ingredient must be at least 3 characters long")
      .max(200)
      .message("Each ingredient cannot be more than 200 characters")
      .required(),
    steps: Joi.string()
      .min(3)
      .message("Each step must be at least 3 characters long")
      .max(200)
      .message("Each step cannot be more than 200 characters")
      .required(),
  };

  const validateRealTimeField = (name, value, index = null, newRecipe) => {
    if (!value) return; // Return early if value is null or empty

    if (name === "ingredients" || name === "steps") {
      const updatedArray = [...newRecipe[name]];
      if (index !== null) {
        updatedArray[index] = value;
      }
      const errorMessage = updatedArray.map((item) => {
        const objToValidate = { [name]: item };
        const validationSchema = Joi.object({ [name]: schema[name] });
        const { error } = validationSchema.validate(objToValidate);
        return error ? error.details[0].message : null;
      });

      settingFormErrors(name, errorMessage);
    } else {
      const objToValidate = { [name]: value };
      const validationSchema = Joi.object({ [name]: schema[name] });
      const { error } = validationSchema.validate(objToValidate);
      settingFormErrors(name, error ? error.details[0].message : null);
    }
  };

  const settingFormErrors = (name, errorMessage) => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage || "",
    }));
  };

  const validationOnSubmit = (newRecipe) => {
    const validateResults = {};
    let isValid = true;

    // Validate ingredients and steps arrays
    ["ingredients", "steps"].forEach((key) => {
      if (key in newRecipe) {
        const fieldErrors = newRecipe[key].map((item) => {
          const objToValidate = { [key]: item };
          const validationSchema = Joi.object({ [key]: schema[key] });
          const { error } = validationSchema.validate(objToValidate);
          if (error) {
            isValid = false;
            return error.details[0].message;
          }
          return null;
        });
        validateResults[key] = fieldErrors;
      }
    });

    // Validate single fields (title, imgSrc, description)
    ["title", "imgSrc", "description"].forEach((key) => {
      if (key in newRecipe) {
        const objToValidate = { [key]: newRecipe[key] };
        const validationSchema = Joi.object({ [key]: schema[key] });
        const { error } = validationSchema.validate(objToValidate);
        if (error) {
          isValid = false;
          validateResults[key] = error.details[0].message;
        }
      }
    });

    setFormErrors(validateResults);
    return isValid;
  };

  const contextValue = {
    validateRealTimeField,
    validationOnSubmit,
    formErrors,
    setFormErrors,
  };

  return (
    <RecipeValidationContext.Provider value={contextValue}>
      {children}
    </RecipeValidationContext.Provider>
  );
}
