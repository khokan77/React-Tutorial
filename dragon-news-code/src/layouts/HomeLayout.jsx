import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router";
import Header from "../components/pages/Header";
import NavBar from "../components/pages/NavBar";
import LeftBar from "../components/pages/LeftBar/LeftBar";
import RightBar from "../components/pages/RightBar/RightBar";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header className="">
        <Header />
        <NavBar />
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftBar />
        </aside>
        <section className="col-span-6 sticky top-0 h-fit">
          {state == "loading" ? <h2>Loading..</h2> : <Outlet />}
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightBar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
