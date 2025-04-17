import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const newBook = data.find((bok) => bok.bookId === parseInt(id));
  const { image, tags, yearOfPublishing } = newBook;
  return (
    <div>
      <img src={image} alt="" />
      <div className="flex gap-3">
        <button className="btn btn-primary">Read</button>
        <button className="btn btn-primary">WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
