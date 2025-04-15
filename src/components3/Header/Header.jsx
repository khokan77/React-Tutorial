import React from "react";
import { Link, NavLink } from "react-router";
import Home from "../Home/Home";
import './Header.css';

const Header = () => {
  return (
    <div>
      <h2>This is Header</h2>
      <nav className="flex gap-5 justify-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Mobiles">Mobiles</NavLink>
        <NavLink to="/Laptops">Laptops</NavLink>
        <NavLink to="/Users">Users</NavLink>
        <NavLink to="/Users2">Users2</NavLink>
      </nav>
    </div>
  );
};

export default Header;
