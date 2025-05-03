import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components6/Root";
import Home from "./components6/pages/Home/Home";
import Login from "./components6/pages/Login/Login";
import "./index.css";
import About from "./components6/pages/Order/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
  {
    path: "about",
    Component: About,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  // </StrictMode>
);
