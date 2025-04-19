import React, { useEffect, useState } from "react";
import { use } from "react";

const ShowCategoryFood = ({ selCategory }) => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selCategory}`)
      .then((res) => res.json())
      .then((data) => setFood(data.meals));
  }, [selCategory]);
  return (
    <div>
      <p>{food?.length}</p>
      {food?.map((fd) => (
        <p>{fd.strmeal}</p>
      ))}
    </div>
  );
};

export default ShowCategoryFood;
