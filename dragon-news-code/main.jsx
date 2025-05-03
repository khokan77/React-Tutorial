import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { StrictMode } from "react";
import router from "./src/routes/router";
import AuthProvider from "./src/contexts/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
