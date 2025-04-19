import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text != "") {
      const newbooks = data.filter((book) =>
        book.bookName.toLowerCase().includes(text.toLowerCase())
      );
      setBooks(newbooks);
    } else setBooks(data);
  };
  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <Books data={books} />
    </div>
  );
};

export default Home;
