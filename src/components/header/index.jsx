import React from "react";
import "../../styles/Header.css";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-slice";
const Header = () => {
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  console.log(themeState);
  const handleThemeChange = () => {
    dispatch(themeActions.toggleTheme());
  };
  return (
    <section className="header-container">
      <h2 className="title">SeacrhGitHub</h2>
      <button onClick={handleThemeChange} className="switch-theme">
        Switch 🌗
      </button>
    </section>
  );
};

export default Header;
