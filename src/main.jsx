import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { UIContextProvider } from "./context/UIContext";
import { BrowserRouter } from "react-router-dom";
import { AdminContextProvider } from "./context/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UIContextProvider>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </UIContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
