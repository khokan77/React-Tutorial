import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setlsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setlsLoading(true);
    fetch("https://fakestoreapi.com/productss")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setlsLoading(false);
      })
      .catch((error) => {
        // console.log(error.message);
        setIsError(error.message);
        setlsLoading(false);
      });
  }, []);
  return (
    <div>
      {isLoading && <div>IsLoading..</div>}
      {isError && <div> IsError: {isError} </div>}
      <h1>Hello</h1>
    </div>
  );
};

export default Products;
