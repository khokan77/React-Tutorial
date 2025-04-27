import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./components5/Routes/Routes";
import "./index.css";
import CartProvider from "./components5/providers/CartProvider";
import UserProvider from "./components5/providers/UserProvider";
import { Toaster } from "react-hot-toast";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <UserProvider>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </CartProvider>
  </UserProvider>
);
