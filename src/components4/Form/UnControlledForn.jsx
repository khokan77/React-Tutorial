import React, { useRef, useState } from 'react';

const UnControlledForn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="" />
                <input ref={passwordRef} type="password" name="password" id="" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlledForn;