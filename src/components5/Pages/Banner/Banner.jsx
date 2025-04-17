import React from 'react';
import bookImage from '../../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between p-4'>
            <div>
                <h2>Books to freshen up your bookshelf</h2>
                <button className='btn btn-primary mt-4'>View The List</button>
            </div>
            <img  className="w-3/12" src={bookImage} alt="" />
        </div>
    );
};

export default Banner;