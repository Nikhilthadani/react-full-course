import { createContext, useLayoutEffect, useState } from "react";

export const ThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  useLayoutEffect(() => {
    document.body.className = mode === "light" ? "light-mode" : "dark-mode";
  }, [mode]);
  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
