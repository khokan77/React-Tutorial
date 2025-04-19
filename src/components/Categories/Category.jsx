import React, { useState } from "react";

const Category = ({ cat, setSelCategory }) => {
  //   console.log(cat);

  //   console.log(selCategory);
  return (
    <div className="btn">
      {
        <button onClick={() => setSelCategory(cat.strCategory)}>
          {cat.strCategory}
        </button>
      }
    </div>
  );
};

export default Category;
