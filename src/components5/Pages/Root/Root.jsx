import React from "react";
import NavBar from "../Header/NavBar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar />
      <div className="min-h-[calc(100vh-320px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
