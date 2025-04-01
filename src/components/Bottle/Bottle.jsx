import React from "react";

const Bottle = ({ bottle, handleBuyCart }) => {
  const { name, img } = bottle;
  return (
    <div className="border-2 border-lime-500 w-70">
      <p className="text-center">{name}</p>
      <img src={img} alt="" />
      <button onClick={() => handleBuyCart(bottle)} className="align-middle">
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;
