import React from "react";
import Header from "../Header/Header";
import { Link, NavLink, Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import "../../app.css";
import SideBar from "../SideBar/SideBar";
import "./root.css";
import "../../index.css";


const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div className="text-center">
      <Header />
      <div className="flex gap-5 justify-center">
        <SideBar />
        {isNavigating && <span>Laoding..</span>}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
