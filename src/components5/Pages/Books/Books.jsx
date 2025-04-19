import React, { Suspense, use, useEffect, useState } from "react";
import Book from "../Book/Book";
import { HiH2 } from "react-icons/hi2";
import Button from "../../UI/Button";

const Books = ({ data }) => {
  const [showBooks, setShowBooks] = useState([]); // Show All or less enable
  const [showAll, setShowAll] = useState(false); // Show All or less enable
  useEffect(() => {
    if (showAll) setShowBooks(data);
    else setShowBooks(data.slice(0, 6));
  }, [data, showAll]);

  return (
    <div>
      <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Suspense fallback={<h2>Laoding..</h2>}>
          {showBooks.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </Suspense>
      </div>
      <div className="text-center mt-4">
        <Button
          onClick={() => {
            setShowAll((prev) => !prev); // scroll to top while show less
            if (showAll) window.scroll(0, 400);
          }}
          label={showAll ? "Show Less" : "Show All"}
        />
      </div>
    </div>
  );
};

export default Books;
