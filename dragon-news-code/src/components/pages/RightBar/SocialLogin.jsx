import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <p className="font-bold">Login With</p>
      <div className="flex  w-full flex-col gap-3 mt-5">
        <button className="btn">
          <FcGoogle />
          Login with Google
        </button>
        <button className="btn">
          <FaGithub />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
