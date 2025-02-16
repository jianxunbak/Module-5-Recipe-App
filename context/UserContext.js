import React, { createContext, useState, useContext } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Example user state (null when not logged in)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to use the Context
export const useUser = () => {
  return useContext(UserContext);
};
