import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import NotFound from "./NotFound";
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
