import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Button from "../../UI/Button";
import { IoMdCart } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { CartContext } from "../../providers/context";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  console.log(cart.length);
  const links = (
    <div className="flex gap-3">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-indigo-600 font-bold" : ""
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-indigo-600 font-bold" : ""
        }
        to={"/about"}
      >
        About
      </NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-bold" : ""
              }
              to={"/Favourites"}
            >
              <FaClipboardList />
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-bold" : ""
              }
              to={"/Cart"}
            >
              <IoMdCart />
              <p className="absolute -top-1 right-0">{cart.length || 0}</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
