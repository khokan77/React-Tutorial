import React, { useState } from 'react';
import { UserContext } from './context';


const UserProvider = ({children}) => {

    const [user, setUser] = useState({name:'kk'})
    return (
        <UserContext value={{user, setUser}}>
            {children}
        </UserContext>
    );
};


export default UserProvider;