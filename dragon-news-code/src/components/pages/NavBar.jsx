import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <div className="w-11/12 mx-auto my-3">
      <div className="flex justify-between items-center">
        {/* Nav start */}
        <div className=""></div>
        {/* Nav middle */}
        <div className="flex justify-center gap-5 text-gray-400">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="career">Career</NavLink>
        </div>
        {/* Nav end */}
        <div className="flex justify-center gap-5">
          {/* <img src={userIcon} alt="" />
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link> */}
          {user ? (
            <>
              <span>{user.email}</span>
              <img src={userIcon} alt="" />
              <a onClick={handleSignOut} className="btn btn-primary px-10">
                Sign Out
              </a>
            </>
          ) : (
            <Link className="btn btn-primary px-10" to="/auth/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
