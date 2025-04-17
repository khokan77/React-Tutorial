import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import { Children } from "react";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children:[
        {
            path:"/",
            loader: () => fetch('booksData.json'),
            index: true, 
            Component: Home
        }
        ]
    },
]);
  