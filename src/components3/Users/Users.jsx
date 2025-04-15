import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../../components3/User/User';


const Users = () => {
    const users =  useLoaderData();
    return (
        <div>
            {users.map(user => <User key={user.id} user = {user}></User> )}
        </div>
    );
};

export default Users;