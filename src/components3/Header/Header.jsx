import React from "react";
import { Link } from "react-router";
import Home from "../Home/Home";

const Header = () => {
  return (
    <div>
      <h2>This is Header</h2>
      <nav className="flex gap-5 justify-center">
        <Link to="/">Home</Link>
        <Link to="/Mobiles">Mobiles</Link>
        <Link to="/Laptops">Laptops</Link>
      </nav>
    </div>
  );
};

export default Header;
