import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut  } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication()
const useFirebase = () => {
const [user, setUser]=useState({});
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// Google Sign In
const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
        console.log(result.user)
      })
      .catch(error => {
        console.log(error.message);
      })
  }

// Sign Out
const logOut =()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        setUser({})
      }).catch((error) => {
        // An error happened.
      });
}

    return {user, signInWithGoogle, logOut}
};

export default useFirebase;