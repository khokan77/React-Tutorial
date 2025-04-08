import React, { useEffect, useState } from 'react';
import { use } from 'react';

const ShowCategoryFood = () => {
    const [food,setFood] = useState()
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ShowCategoryFood;