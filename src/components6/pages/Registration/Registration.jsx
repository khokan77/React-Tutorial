import React, { useState } from 'react';
import { auth } from '../../../Firebase/firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Registration = () => {
    const handleOnSubmit = e => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            createUserWithEmailAndPassword(auth, email, password)
              .then((result) => {
               console.log(result)
              })
              .catch((error) => {
               setError(error)
              });
            
    }
    return (
        <div className='max-w-sm mx-auto mt-5 p-4'>
            <h2 className='text-2xl font-bold mb-5'>Please Registration</h2>
            <form className='space-y-4' onSubmit={handleOnSubmit}>
                {/* email section */}
            <div>
                <label className="input validator join-item">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                </svg>
                <input type="email" name="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
            </div>
            {/* password section */}
            <div>
            <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <path
                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </g>
            </svg>
            <input
                type="password"
                required
                placeholder="Password"
                name="password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                autoComplete='current-password'
            />
            </label>
            <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
            </p>
            </div> 
            <button className='btn'>Submit</button>

            </form>
            
        </div>
    );
};

export default Registration;