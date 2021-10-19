import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import swal from 'sweetalert';

// Initializing Firebase
initializeAuthentication()
const useFirebase = () => {
    // User Hook
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Email Password Account register
    const createAccount = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                updateUserName(name);
                // console.log(result.user);
                swal("Congratulations!", "Account creation successful!", "success");
            })
            .catch((error) => {
                swal("Oops!", `${error.message}`, "error");
                // ..
            })
            .finally(() => { setIsLoading(false) })
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
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                swal("Congratulations!", "Successfully signed in!", "success");
            })
            .catch((error) => {
                swal("Oops!", `${error.message}`, "error");
            })
            .finally(() => { setIsLoading(false) })
    }


    // Google Sign In
    const signInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                swal("Great!", "You've successfully signed in!", "success");
            })
            .catch(error => {
                swal("Oops!", `${error.message}`, "error");
            })
            .finally(() => { setIsLoading(false) })
    }

    // Sign Out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            swal("Great!", "You've successfully logged out!", "success");
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => { setIsLoading(false) })
    }

    // Observer
    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])

    return { user, signInWithGoogle, logOut, createAccount, signIn, setUser, isLoading }
};

export default useFirebase;