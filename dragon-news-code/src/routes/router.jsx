import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import MiddleBar from "../components/pages/MiddleBar/MiddleBar";
import Categories from "../components/pages/LeftBar/categories";
import CategoryNews from "../components/pages/MiddleBar/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: MiddleBar,
      },
      {
        path: "category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "auth",
    element: <h2>This is auth page</h2>,
  },
  {
    path: "news",
    element: <h3>This is news page</h3>,
  },
  {
    path: "*",
    element: <h2>404 error page</h2>,
  },
]);

export default router;
