import React from "react";
import { useTheme } from "../store";
import Header from "../header/Header";

const Layout = ({ children }) => {
  const { mode } = useTheme();
  return (
    <main className={mode === "light" ? "light-theme" : "dark-theme"}>
      <Header />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
