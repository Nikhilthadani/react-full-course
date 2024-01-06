import React from "react";
import { useTheme } from "../store";
const Header = () => {
  const theme = useTheme();
  const handleThemeChange = () => {
    theme.toggleTheme();
  };
  return (
    <header className="header-container">
      <div className="header-items">
        <button onClick={handleThemeChange} className="switch-btn">
          Switch 🌗
        </button>
      </div>
    </header>
  );
};

export default Header;
