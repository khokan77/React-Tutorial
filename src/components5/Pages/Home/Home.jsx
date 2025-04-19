import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === " ") {
      setBooks(data);
      return;
    }
    const newbooks = data.filter(
      (book) =>
        book?.bookName?.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        book.category.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    if (newbooks.length > 0) setBooks(newbooks);
  };
  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <Books data={books} />
    </div>
  );
};

export default Home;
