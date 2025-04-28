import React from "react";
import { Outlet } from "react-router";
import NavBar from "./pages/NavBar/NavBar";


const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
