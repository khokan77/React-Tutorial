
  import React from "react";
  import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./components5/Routes/Routes";
import './index.css'
  

  const root = document.getElementById("root");
  
  ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
  );
  