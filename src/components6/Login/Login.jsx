import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const provider = new GoogleAuthProvider();

const handleSignwithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
const Login = () => {
  return (
    <div>
      <button onClick={handleSignwithGoogle}>Sign in With Google</button>
    </div>
  );
};

export default Login;
