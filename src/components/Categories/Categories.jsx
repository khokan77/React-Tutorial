import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const[category,setCategory]= useState([])
    useEffect(() => {
       fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
         .then(data => setCategory(data.categories)) 
    },[])
     console.log(category)
   
    return (
        <div className='flex p-2 justify-around gap-2'>
           { category.map(cat => <Category cat = {cat} key={cat.idCategory}></Category>)}
        </div>
    );
};

export default Categories;