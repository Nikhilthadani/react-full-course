import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { UserContext } from "./UserProvider";

const useTheme = () => useContext(ThemeContext);
const useGithubUser = () => useContext(UserContext);

export { useTheme, useGithubUser };
