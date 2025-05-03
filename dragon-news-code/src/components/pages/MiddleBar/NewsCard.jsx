import React from "react";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShare,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ data }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = data;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400 inline" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400 inline" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="card  shadow-md">
      <div className="flex justify-between gap-3 p-3 bg-base-300">
        <div className="flex gap-2">
          <div className="avatar ">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="text-md font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {author.published_date.slice(0, 10)}
            </p>
          </div>
        </div>

        <div>
          <button className="p-2">
            <FaRegBookmark />
          </button>
          <button className="p-2">
            <FaShare />
          </button>
        </div>
      </div>

      <div className="card-body px-5 pt-3 pb-2">
        <h2 className="card-title text-lg">{title}</h2>
      </div>

      <figure>
        <img
          src={thumbnail_url}
          alt="News"
          className="w-full h-48 object-cover p-3*-"
        />
      </figure>

      <div className="card-body px-5 pt-3">
        <p className="text-sm text-gray-700">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>
        <Link
          to={`/news-details/${id}`}
          className="text-blue-500 font-semibold mt-2 cursor-pointer"
        >
          Read More
        </Link>
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-1 text-orange-500 font-semibold">
            {renderStars(rating)}
            <span>{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
