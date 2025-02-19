import React, { createContext, useState, useContext } from "react";

// Create Context
const LoginContext = createContext();

// Provider Component
export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

// Custom Hook to use the Context
export const useLogin = () => {
  return useContext(LoginContext);
};
