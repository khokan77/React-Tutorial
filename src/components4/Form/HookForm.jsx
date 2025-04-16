import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const[name, onHandleChangeName] = useInputField('');
    const[email, onHandleChangeEmail] = useInputField('');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name,email);
    }


    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={onHandleChangeName} type="text" name="name" id="" />
                    <input onChange={onHandleChangeEmail} type="email" name="email" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
        </div>
    );
};

export default HookForm;