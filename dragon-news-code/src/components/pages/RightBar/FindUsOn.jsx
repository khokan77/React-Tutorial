import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full *:border-1 border-gray-100">
          <button className="btn justify-start bg-base-100 join-item">
            <FaInstagram /> Instragram
          </button>
          <button className="btn justify-start bg-base-100 join-item">
            <FaFacebook /> FaceBook
          </button>
          <button className="btn justify-start bg-base-100 join-item">
            <FaTwitter /> Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
