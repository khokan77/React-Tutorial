import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';
import { HiH2 } from 'react-icons/hi2';

const Books = ({data}) => {
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <Suspense fallback={<h2>Laoding..</h2>}>
            {        
                data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook} ></Book>)             
            }
        </Suspense>
        </div>
    );
};

export default Books;