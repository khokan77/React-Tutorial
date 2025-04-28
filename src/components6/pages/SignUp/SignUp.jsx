import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../Firebase/firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const SignUp = () => {
    const [error, setError] = useState('')
    const[result, setResult] = useState(false)
    const[visible, setVisible] = useState(false)
    const handleOnSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        setError('')
        setResult(false)
        if(!terms){
            setError("Please accept terms.")
            return;
        }

        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
           if(passwordRegEx.test(password) === false) {
            setError("Must be atleast 6 characters, including number, lowercase letter, uppercase letter")
            return;
           }

        createUserWithEmailAndPassword(auth, email, password, terms)
          .then((result) => {
           console.log(result)
           sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('verfication email sent')
                setResult(true)
            });

            // update profile
            const profile = {
                displayName: uname,
                photoURL: photo
            }

            setError('')
            updateProfile(auth.currentUser, profile).then(() => {
               alert('user profile upadatd')
              }).catch((error) => {
                setError(error.message)
              });

          })

          .catch((error) => {
            setError(error.message)
          });
        
}

    return (
        <div className='mt-15'>
                               
                    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-2xl font-bold'>Please Sign Up Now</h1>
                        <form onSubmit={handleOnSubmit}>
                        <label className="label">Name</label>
                        <input type="text" name="uname" className="input" placeholder="Enter Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name="photo" className="input" placeholder="Enter Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <div className='relative'>
                                <input  type={visible? "text": "password"} name='password' className="input" placeholder="Password" />  
                                <button  type='button' onClick={() => setVisible(!visible)} className='btn btn-xs absolute top-2 right-7'>{ visible? <FaEyeSlash />: <FaEye />}</button>
                        </div>
                        
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <div>
                        <label className="label mt-4">
                            <input type="checkbox" name="terms" className="checkbox" />
                            Accept terms and Conditions
                         </label>
                        </div>
                        <button className="btn btn-neutral mt-4 text-left ">Sign Up</button>
                        </form>    
                        <p>Already have an account please <Link className='text-blue-500 underline' to="/Login">Login</Link></p>
                        { result && <p className='text-green-500'>
                            Successfully Logged In </p>                             
                           }
                           {
                            error && <p className='text-red-500'>
                                {error}
                            </p>
                           }                      
                    </div>
                    </div>                        
                </div>
    );
};

export default SignUp;