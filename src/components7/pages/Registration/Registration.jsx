import React, { use } from 'react';
import { Link } from 'react-router';
import { auth } from '../../../Firebase/firebase.init2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../Contexts/AuthContext';

const Registration = () => {

    const {createUser} = use(AuthContext)

    const handleRegister = e =>
            {
                e.preventDefault()
                const name = e.target.name.value;
                const email = e.target.email.value;
                const password = e.target.password.value;
                console.log(name,email, password)
                createUser(email, password)
                    .then((result) => {
                      console.log(result)
                    })
                    .catch((error) => {
                        console.log(error)
                    });

            }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl mt-10">
        <h3 className="text-2xl font-bold text-center">Register now!</h3>
        <div className="card-body">
        <form onSubmit={handleRegister}>
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <p>Already have an accout please <Link className='text-blue-500 underline' to="/login">Login</Link></p>
        </div>
        </div>
    );
};

export default Registration;