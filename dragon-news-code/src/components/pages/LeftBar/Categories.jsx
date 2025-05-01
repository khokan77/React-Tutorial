import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
      <div className="grid grid-cols-1 gap-3 border-0 mt-5">
        {categories.map((category) => (
          <NavLink
            className={"btn border-0 bg-base-100 hover:bg-base-300"}
            to={`category/${category.id}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
