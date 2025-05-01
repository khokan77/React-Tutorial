import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { StrictMode } from "react";
import router from "./src/routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
