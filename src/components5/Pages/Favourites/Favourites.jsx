import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { CartContext } from "../../providers/context";
import Books from "../Book/Book";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {
  getCartFromLocalStorage,
  removeCart,
} from "../../../Utils/localstorage";

const Favourites = () => {
  const data = useLoaderData();
  const { cart } = useContext(CartContext);
  const [favourites, setFavourite] = useState([]);

  useEffect(() => {
    const favorite = data.filter((book) => cart.includes(book.bookId));
    setFavourite(favorite);
  }, []);

  const handleRemove = (id, fav) => {
    removeCart(id, fav);
    const favorite = getCartFromLocalStorage(fav);
    console.log(favorite);
    setFavourite(favorite);
  };
  return (
    <div>
      {<h2>{favourites.length}</h2>}
      <div className="grid grid-cols-1 gap-3">
        {favourites.map((book) => (
          <div className="card bg-base-100 w-96 shadow-sm border p-6">
            <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
              <img className="h-[166px]" src={book.image} alt="Shoes" />
            </figure>
            <div className="flex justify-center gap-3 mt-3">
              {book.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
            <div className="card-body">
              <h2 className="card-title">
                {book.bookName}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{book.category}</div>
                <div className="badge badge-outline">
                  {book.rating}
                  <FaStarHalfAlt />
                </div>
              </div>
            </div>
            <div
              onClick={() => handleRemove(book.bookId, "Fav")}
              className="bg-gray-900 p-3 ml-5 rounded-full hover:bg-gray-300 group  cursor-pointer hover:scale-105 absolute -top-5 -right-5"
            >
              <MdDeleteForever
                size={20}
                className="text-gray-100 group-hover:text-gray-900"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
