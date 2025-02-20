import React, { createContext, useState, useContext } from "react";

// Create Context
const UserContext = createContext({
  user: null,
  setUser: () => {},
});

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    id: "",
    email: "",
    memberSince: "",
    about: "",
    profilePic: "",
    password: "",
    location: { latitude: "", longitude: "" },
    address: "",
  });

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
