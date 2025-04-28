import React, { useRef, useState } from 'react';
import { auth } from '../../../Firebase/firebase.init';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router';

const Login = () => {
    const[error, setError] = useState('')
    const[success, setSuccess] = useState(false)
    const emailRef = useRef();

    const handleOnSubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        setError("")
        setSuccess(false)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         if(userCredential.user.emailVerified)
            setSuccess(true)
        else
            alert('user not verified')
        })
        .catch((error) => {
            setError(error.message)
        });
    }

    const handleForgetPass = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('reset mail sent');
        })
        .catch((error) => {
            setError(error.message)
        });

    }
    return (       
        <div className='max-w-sm mx-auto mt-5 p-4'>
             <h2 className='text-2xl font-bold mb-5'>Please Login Here</h2>
                <div className="card bg-base-100 shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleOnSubmit}>
                    <label className="label">Email</label>
                    <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                    <div onClick={handleForgetPass}><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p>New To Website go to <Link className="text-blue-500 underline" to="/signup">SignUp</Link></p>
                    {                        
                        error && <p className='text-red-500'>
                            {error}
                        </p>
                    }
                    {
                        success && <p className='text-green-500'>
                            Logged In Successfully
                        </p>
                    }
                </div>
                </div>
            </div>
    );
};

export default Login;