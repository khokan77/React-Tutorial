import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div className="flex gap-3">
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <img className="w-24" src={bottle.img} alte=""></img>
          <button onClick={() => handleRemoveCart(bottle.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
