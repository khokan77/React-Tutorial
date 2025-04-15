import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {
    const {name, website} = useLoaderData();
     const navigate = useNavigate();
     const {userId} = useParams();
     console.log(userId);
     
    return (
        <div>
            <p>Name: {name}</p>
            <p>website: {website}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;