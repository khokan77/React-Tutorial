import React, { useState } from "react";
import bookImage from "../../../assets/books.jpg";

const Banner = ({ handleSearch }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4">
        <div className="flex flex-col gap-3">
          <h2>Books to freshen up your bookshelf</h2>
          <button className="btn btn-primary mt-4">View The List</button>
        </div>
        <img className="w-3/12" src={bookImage} alt="" />
      </div>
      <form
        onSubmit={(e) => handleSearch(e, text)}
        className="flex flex-col md:flex-row justify-center items-center gap-3"
      >
        <input
          onChange={(e) => setText(e.target.value)}
          className="border bg-white  rounded shadow-md border-gray-200 px-4 mb-3 w-2/3 h-12
                   focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search Phone By name"
        />
        <button className="relative inline-block text-lg group mb-4 cursor-pointer">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Search</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </form>
    </>
  );
};

export default Banner;
