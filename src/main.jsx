import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoginProvider from "./context/index.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginProvider>
);
