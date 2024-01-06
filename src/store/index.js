import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import UserProvider from "./UserProvider";

const useTheme = () => useContext(ThemeContext);
const useFetchProvider = () => useContext(UserProvider);

export { useTheme, useFetchProvider };
