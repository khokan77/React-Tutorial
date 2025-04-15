import React from "react";
import Header from "../Header/Header";
import { Link, NavLink, Outlet } from "react-router";
import Footer from "../Footer/Footer";
import "../../app.css";
import SideBar from "../SideBar/SideBar";
import "./root.css";
import "../../index.css";

const Root = () => {
  return (
    <div className="text-center">
      <Header />
      <div className="flex gap-5 justify-center">
        <SideBar />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
