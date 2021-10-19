import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import swal from 'sweetalert';


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
        swal("Great!", "You've successfully signed in!", "success");
      })
      .catch(error => {
        console.log(error.message);
        swal("Oops!", `${error.message}`, "error");
      })
  }

// Sign Out
const logOut =()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        setUser({})
        swal("Great!", "You've successfully logged out!", "success");
      }).catch((error) => {
        // An error happened.
      });
}

// Observer
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({})
      }
    });
  }, [])

    return {user, signInWithGoogle, logOut}
};

export default useFirebase;