import React, { createContext, useState, useContext } from "react";

// Create Context
const IsLoadingAndEditingContext = createContext();

// Provider Component
export const IsLoadingAndEditingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <IsLoadingAndEditingContext.Provider
      value={{ isLoading, setIsLoading, isEditing, setIsEditing }}
    >
      {children}
    </IsLoadingAndEditingContext.Provider>
  );
};

// Custom Hook to use the Context
export const useIsLoadingAndEditing = () => {
  return useContext(IsLoadingAndEditingContext);
};
