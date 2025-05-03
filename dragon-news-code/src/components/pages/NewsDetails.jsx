import React, { useEffect, useState } from "react";
import Header from "./Header";
import RightBar from "./RightBar/RightBar";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((sigleNews) => sigleNews.id == id);
    setNews(newsDetails);
  }, []);
  return (
    <div>
      <Header />
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightBar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
