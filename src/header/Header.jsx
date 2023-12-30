import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav
      style={{
        display: "flex",
        margin: "auto",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/orders"}>Orders</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      <NavLink to={"/account"}>Account</NavLink>
      <NavLink to={"/app/nested"}>Nested</NavLink>
      <NavLink to={"/user/1"}>Dynamic</NavLink>
    </nav>
  );
};

export default Header;
