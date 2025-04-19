import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, image, author, rating, category, tags, bookId } =
    singleBook;
  return (
    <div className="flex items-center justify-center">
      <Link to={`/BookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
          <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
            <img className="h-[166px]" src={image} alt="Shoes" />
          </figure>
          <div className="flex justify-center gap-3 mt-3">
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
          <div className="card-body">
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline">
                {rating}
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
