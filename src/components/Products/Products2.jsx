import React from "react";
import { use } from "react";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A functional React component that fetches and displays a list of products.
 *
 * @param {Object} props - The props object.
 * @param {Promise} props.fetchProducts - A promise that resolves to an array of product data.
 */

/******  30cc83a5-9aed-4423-81ce-e9e7854b5667  *******/
const Products2 = ({ fetchProducts }) => {
  const products = use(fetchProducts);
  //   console.log(products);

  return (
    <div>
      <h1>{products.length}</h1>
      {products.map((product) => (
        <li className="bg-green-300 rounded p-2 m-2" key={product.id}>
          {product.title}
        </li>
      ))}
    </div>
  );
};

export default Products2;
