import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const[blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
     },[]);

     console.log(blogs);
    return (
        <div>
            <div className="main-container flex text-center">
                <div className="left-container w-[70%] ">
                    <h1>Blogs: {blogs.length}</h1>
                    <div className='grid grid-cols-2'>
                        { blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)}
                    </div>
                </div>
                <div className="right-container w=[30%]">
                    <h2>Reading Time: 0</h2>
                    <h2>Bookbark Count: 0</h2>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;