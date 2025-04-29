import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "./components7/pages/Home/Home";
import Login from "./components7/pages/Login/Login";
import Registration from "./components7/pages/Registration/Registration";
import Root from "./components7/pages/Root/Root";
import { StrictMode } from "react";
import "./index.css";
import AuthProvider from "./components7/Contexts/AuthProvider";
import Order from "./components6/pages/Order/Order";
import PrivateRouter from "./components7/Routes/PrivateRouter";
import Dashboard from "./components7/pages/Dashboard/Dashboard";


const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children:[
            {
                index:true, 
                Component: Home
            },
            {
                path:'login',
                Component: Login
            },
            {
                path:'registration',
                Component: Registration
            },
            {
                path:'order',
                element:<PrivateRouter><Order></Order> </PrivateRouter>  
            },
            {
                path:'dashboard',
                element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>  
            },
        ],
    },
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </StrictMode>
  );
  