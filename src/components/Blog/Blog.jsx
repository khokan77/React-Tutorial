import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={blog.cover} alt="Shoes" className="rounded-xl" />
        </figure>
        <div>
          <div className="flex justify-around items-center">
            <p>{blog.author}</p>
            <img className="w-16" src={blog.author_img} alt=""></img>
            <button></button>
            <button
              onClick={() => handleBookmark(blog)}
              className="btn btn-ghost btn-circle"
            >
              <FaBookmark size={25} />
            </button>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <div className="flex justify-around items-center">
            {blog.hashtags.map((hashtag, index) => (
              <p key={index}>{hashtag} </p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Mark As Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
