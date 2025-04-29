import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/firebase.init2';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const[loading, setLoading] = useState(true) // button refresh waitn for loading to go to login page

    const createUser = (email,password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        signOut(auth).then(() => {
            console.log('Sign out sucessful')
        }).catch(error => {
            console.log(error)
        })
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('cuurent user inside useeffect on auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[]);
    

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInGoogle
    }

    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;