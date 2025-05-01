import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setNews(data);
    } else if (id == "1") {
      const filterNews = data.filter((cat) => cat.others.is_today_pick == true);
      setNews(filterNews);
    } else {
      const filterNews = data.filter((cat) => cat.category_id == id);
      console.log(filterNews);
      setNews(filterNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2>Category News -{news.length}</h2>
    </div>
  );
};

export default CategoryNews;
