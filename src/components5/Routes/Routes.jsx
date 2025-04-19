import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import { Children } from "react";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Favourites from "../Pages/Favourites/Favourites";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        hydrateFallbackElement: <p>Loading.. Plz wait</p>,
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
      {
        path: "/Favourites",
        Component: Favourites,
      },
    ],
  },
]);
