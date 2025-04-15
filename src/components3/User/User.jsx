import React from 'react';
import { Link, useNavigate } from 'react-router';


const User = ({user}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
            navigate(`/users/${id}`)
    }
    const {id,name, username, email} = user;
    return (
        <div className='border-2 rounded-2xl p-2 mt-2'>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <Link to={`../users/${id}`}>Show Details</Link>
            <br />
            <button className='btn' onClick={handleNavigate}>Details of {id}</button>
        </div>
    );
};

export default User;