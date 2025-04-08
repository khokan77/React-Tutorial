import React, { useState } from 'react';

const Category = ({cat}) => {
    // console.log(cat);
    const [selCategory,setSelCategory]= useState()
    console.log(selCategory)
    return (
        <div className='btn'>
            {
                <button onClick={()=> setSelCategory(cat.strCategory)}>{cat.strCategory}</button>
            }
        </div>
    );
};

export default Category;