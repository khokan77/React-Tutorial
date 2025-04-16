import React, { useState } from "react";

const ProductForm = ({ handleProducts }) => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const newProduct = {
      name,
      price,
      quantity,
    };
    if (name.length === 0) {
      setError("name should not be empty");
      return;
    } else {
      setError("");
    }
    handleProducts(newProduct);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="name" />
        <input type="text" name="price" id="" placeholder="price" />
        <input type="text" name="quantity" id="" placeholder="quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
