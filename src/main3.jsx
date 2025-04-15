import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode, Suspense } from "react";
import Mobiles from "./components3/Mobiles/Mobiles";
import Root from "./components3/Root/Root";
import Home from "./components3/Home/Home";
import Laptops from "./components3/Laptops/Laptops";
import Users from "./components3/Users/Users";
import { HiH2 } from "react-icons/hi2";
import { ErrorBoundary } from "react-error-boundary";
import Users2 from "./components3/Users/users2";
import UserDetails from "./components3/UserDetails/UserDetails";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "Users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "Users2",
        element: (
          <Suspense fallback={<h2>Loading..</h2>}>
            <Users2 userPromise={userPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
    ],
  },
  {
    path: "*",
    element: <h3>404 not found</h3>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
