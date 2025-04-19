import React, { useState } from "react";
import bookImage from "../../../assets/books.jpg";
import Button from "../../UI/Button";

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
        onSubmit={(e) => {
          handleSearch(e, text);
          //reset input text
          setText(" ");
        }}
        className="flex flex-col md:flex-row justify-center items-center gap-3"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border bg-white  rounded shadow-md border-gray-200 px-4 mb-3 w-2/3 h-12
                   focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search Phone By name"
        />
        <Button type="submit" label="Search" />
      </form>
    </>
  );
};

export default Banner;
