import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../../UI/Button";
import { MdBookmarkAdd } from "react-icons/md";
import { AddToFavourite } from "../../Utils/utils";
import {
  getCartFromLocalStorage,
  setCartToLocalStorage,
} from "../../../Utils/localstorage";
import toast from "react-hot-toast";
import { useContext } from "react";
import { CartContext } from "../../providers/context";

const BookDetails = () => {
  const { setCart } = useContext(CartContext);
  const { id } = useParams();
  const data = useLoaderData();
  const newBook = data.find((bok) => bok.bookId === parseInt(id));
  const { image, tags, yearOfPublishing } = newBook;
  const handleFavourites = () => {
    const bResult = setCartToLocalStorage(newBook.bookId, "Fav");
    bResult
      ? toast.success("successfully added")
      : toast.error("already added");
    setCart(getCartFromLocalStorage("Fav"));
  };
  return (
    <div>
      <img src={image} alt="" />
      <div className="flex gap-3 items-center">
        <Button onClick={handleFavourites} label={<MdBookmarkAdd />} />
      </div>
    </div>
  );
};

export default BookDetails;
