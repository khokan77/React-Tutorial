import React from "react";

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  return <div>{news.title}</div>;
};

export default NewsDetailsCard;
