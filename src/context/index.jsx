import { createContext, useContext, useState } from "react";

const LoginContext = createContext();
export const useAuth = () => useContext(LoginContext);
const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const login = (userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId("");
  };

  const value = { isLoggedIn, userId, login, logout };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
