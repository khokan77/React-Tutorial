import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import {
  getCartFromLocalStorage,
  setCartToLocalStorage,
} from "../../Utils/localstorage";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  const handleBuyCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    setCartToLocalStorage(bottle.id);
  };

  return (
    <>
      <div>{bottles.length}</div>
      <div>Cart Added: {getCartFromLocalStorage().length}</div>
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
