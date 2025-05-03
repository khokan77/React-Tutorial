import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import MiddleBar from "../components/pages/MiddleBar/MiddleBar";
import Categories from "../components/pages/LeftBar/categories";
import CategoryNews from "../components/pages/MiddleBar/CategoryNews";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Registration from "../components/pages/Registration";
import AuthLayout from "../layouts/AuthLayout";
import NewaDetails from "../components/pages/NewsDetails";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <h2>Loading...</h2>,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registration",
        Component: Registration,
      },
    ],
  },
  {
    path: "news-details/:id",
    element: (
      <PrivateRouter>
        <NewaDetails />
      </PrivateRouter>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <h2>Loading...</h2>,
  },
  {
    path: "*",
    element: <h2>404 error page</h2>,
  },
]);

export default router;
