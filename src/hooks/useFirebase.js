import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import swal from 'sweetalert';

// Initializing Firebase
initializeAuthentication()
const useFirebase = () => {
    // User Hook
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Email Password Account register
    const createAccount = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                updateUserName(name);
                // console.log(result.user);
                swal("Congratulations!", "Account creation successful!", "success");
            })
            .catch((error) => {
                swal("Oops!", `${error.message}`, "error");
                // ..
            });
    }

    // Update name
    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {
            // Profile updated!
        }).catch((error) => {
            // An error occurred
        });
    }

    // Email Password Sign In
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                swal("Congratulations!", "Successfully signed in!", "success");
            })
            .catch((error) => {
                swal("Oops!", `${error.message}`, "error");
            });
    }


    // Google Sign In
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                swal("Great!", "You've successfully signed in!", "success");
            })
            .catch(error => {
                swal("Oops!", `${error.message}`, "error");
            })
    }

    // Sign Out
    const logOut = () => {
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

    return { user, signInWithGoogle, logOut, createAccount, signIn , setUser}
};

export default useFirebase;