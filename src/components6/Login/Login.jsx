import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";


const Login = () => {
  
  const [user, setUser] = useState(null)
  const provider = new GoogleAuthProvider();
  const providerGitHub = new GithubAuthProvider();

  const handleSignwithGoogle = () => {
      
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  const handleSignwithGitHub = () => {
        
    signInWithPopup(auth, providerGitHub)
      .then((result) => {
        console.log(result);
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
          console.log('Signout completed')
          setUser(null)
      })
      .catch(() => {

      })
  }

  const handleSignOutGitHub = () => {
    signOut(auth)
      .then(() => {
          console.log('Signout completed')
          setUser(null)
      })
      .catch(() => {

      })
  }
  return (
    <div>
     
       {
        user ? 
            <button onClick={handleSignOut} >SignOut</button> : <> 
            <button onClick={handleSignwithGoogle}>Sign in With Google</button>
            <button onClick={handleSignwithGitHub}>Sign in With GitHub</button>
            </> 
        
        
       }
      { user && <div>
        <p>{user.displayName}</p> 
        <p>{user.email} </p> 
        </div>
      }
      
    </div>
  );
};

export default Login;
