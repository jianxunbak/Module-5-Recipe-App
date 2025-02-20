import { createContext, useState } from "react";

export const favoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };
  const contextValue = {
    favorites,
    setFavorites,
    toggleFavorite,
  };
  return (
    <favoriteContext.Provider value={contextValue}>
      {children}
    </favoriteContext.Provider>
  );
}
