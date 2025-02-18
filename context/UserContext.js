import React, { createContext, useState, useContext } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "Faizal | SE8",
    id: "joyful_avocado_99353",
    email: "faizal@example.com",
    memberSince: "19 Aug 2024",
    about: "Software Engineer | Tech Enthusiast",
    profilePic: "https://via.placeholder.com/100",
  }); // Example user state (null when not logged in)

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
