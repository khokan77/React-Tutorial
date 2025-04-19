import React, { useState } from "react";
import Categories from "../Categories/Categories";
import ShowCategoryFood from "../ShowCategoryFood";

const HomePage = () => {
  const [selCategory, setSelCategory] = useState();
  console.log(selCategory);
  return (
    <div>
      <nav className="flex justify-between items-center border-2 p-2">
        <a>Home</a>
        <a>About</a>
        <a>Cart</a>
        <a>Blogs</a>
      </nav>
      <Categories setSelCategory={setSelCategory}></Categories>
      <ShowCategoryFood selCategory={selCategory}></ShowCategoryFood>
    </div>
  );
};

export default HomePage;
