import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [catNews, setCatNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCatNews(data);
    } else if (id == "1") {
      const filterNews = data.filter((cat) => cat.others.is_today_pick == true);
      setCatNews(filterNews);
    } else {
      const filterNews = data.filter((cat) => cat.category_id == id);
      console.log(filterNews);
      setCatNews(filterNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-bold">Dragon News Home</h2>
      <h2>Category News -{catNews.length}</h2>
      {catNews.map((news) => (
        <NewsCard key={news.id} data={news}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryNews;
