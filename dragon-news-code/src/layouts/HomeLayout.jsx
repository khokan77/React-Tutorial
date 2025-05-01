import React from "react";
import { Outlet } from "react-router";
import Header from "../components/pages/Header";
import NavBar from "../components/pages/NavBar";
import LeftBar from "../components/pages/LeftBar/LeftBar";
import RightBar from "../components/pages/RightBar/RightBar";

const HomeLayout = () => {
  return (
    <div>
      <header className="hidden">
        <Header />
        <NavBar />
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12">
        <aside className="col-span-3">
          <LeftBar />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightBar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
