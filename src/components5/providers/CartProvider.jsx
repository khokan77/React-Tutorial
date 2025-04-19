import React, { useEffect, useState } from "react";
import { CartContext } from "./context";
import { getCartFromLocalStorage } from "../../Utils/localstorage";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const carts = getCartFromLocalStorage("Fav");
    console.log(carts);
    setCart(carts);
  }, []);
  return (
    <div>
      <CartContext value={{ cart, setCart }}>{children}</CartContext>
    </div>
  );
};

export default CartProvider;
