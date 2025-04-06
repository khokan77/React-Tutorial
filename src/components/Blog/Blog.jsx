import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {
    return (
        <div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                src= {blog.cover}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body">
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="flex justify-around items-center">
                    <p>{blog.author}</p>
                    <img className='w-16'src={blog.author_img} alt=''></img>
                    <FaBookmark size={25}/>
                </div>
                <h2 className="card-title">{blog.title}</h2>               

                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;