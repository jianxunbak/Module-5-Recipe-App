import React, { createContext, useState, useContext } from "react";

// Create Context
const UserContext = createContext({
  user: null,
  setUser: () => {},
});

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "Faizal | SE8",
    id: "joyful_avocado_99353",
    email: "faizal@example.com",
    memberSince: "19 Aug 2024",
    about: "Software Engineer | Tech Enthusiast",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQG6U7DsIIUVQmkDyihIPWI-aBCmeLli02NQ&s",
  });

  const [editUser, setEditUser] = useState({
    username: "",
    id: "",
    email: "",
    memberSince: "",
    about: "",
    profilePic: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser, editUser, setEditUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to use the Context
export const useUser = () => {
  return useContext(UserContext);
};
