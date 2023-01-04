import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./lib/router";
import ReactDOM from "react-dom/client";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
