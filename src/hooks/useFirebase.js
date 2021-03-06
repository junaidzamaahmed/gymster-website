import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

// Initializing Firebase
initializeAuthentication()
const useFirebase = () => {
    // User Hook
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Email Password Account register
    const createAccount = (email, password, name, redirected_url, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                updateUserName(name);
                swal("Congratulations!", "Account creation successful!", "success");
                history.push(redirected_url)
                window.location.reload()
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
    const signIn = (email, password, redirected_url, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                swal("Congratulations!", "Successfully signed in!", "success");
                history.push(redirected_url)
            })
            .catch((error) => {
                swal("Oops!", `${error.message}`, "error");
            })
            .finally(() => { setIsLoading(false) })
    }


    // Google Sign In
    const signInWithGoogle = (redirected_url, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                swal("Great!", "You've successfully signed in!", "success");
                history.push(redirected_url)
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