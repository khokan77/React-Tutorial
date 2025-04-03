import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import {
  getCartFromLocalStorage,
  removeCart,
  setCartToLocalStorage,
} from "../../Utils/localstorage";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const newIDS = [];
    const storedCart = getCartFromLocalStorage();
    for (const id of storedCart) {
      const newID = bottles.find((bottle) => bottle.id === id);
      if (newID) {
        newIDS.push(newID);
      }
    }

    setCart(newIDS);
  }, [bottles]);

  //   setCart(newIDS);

  const handleBuyCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    setCartToLocalStorage(bottle.id);
  };

  const handleRemoveCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id != id);
    setCart(remainingCart);
    removeCart(id);
  };

  return (
    <>
      <div>{bottles.length}</div>
      <div>Cart Added: {cart.length}</div>
      <div>
        <Cart handleRemoveCart={handleRemoveCart} cart={cart}></Cart>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleBuyCart={handleBuyCart}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
