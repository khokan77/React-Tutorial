import React, { use, useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('');
    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password)
    }

    const onHandleChangePassword = e => {
        console.log(e.target.value)
        setPassword(e.target.value)
        if(password.length < 6)
            setError('Error length must be 6')
        else
        setError('')

    }

    const onHandleChangeName = e => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleChangeName} name="name" />
                <input type="password" onChange={onHandleChangePassword} defaultValue={password} name="email" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;