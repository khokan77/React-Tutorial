import React from "react";
import { NavLink } from "react-router";
import user from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className="w-11/12 mx-auto my-3">
      <div className="flex justify-between items-center">
        {/* Nav start */}
        <div className=""></div>
        {/* Nav middle */}
        <div className="flex justify-center gap-5 text-gray-400">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="career">Career</NavLink>
        </div>
        {/* Nav end */}
        <div className="flex justify-center gap-5">
          <img src={user} alt="" />
          <button className="btn btn-primary px-10">Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
