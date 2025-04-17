import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import { Children } from "react";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        loader: () => fetch("booksData.json"),
        index: true,
        Component: Home,
      },
      {
        path: "/BookDetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/About",
        Component: About,
      },
    ],
  },
]);
