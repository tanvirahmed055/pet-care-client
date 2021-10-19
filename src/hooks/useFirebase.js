import { useState, useEffect } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [userInfo, setUserInfo] = useState(null);

    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();




    const handleUserRegistration = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // ...
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
            });
    }

    const handleUserLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUserInfo(user);


                // ...
            } else {
                // User is signed out
                // ...
            }
            setLoading(false);
        });
    }, [])

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUserInfo({});
        }).catch((error) => {
            // An error happened.
        });
    }

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    return {
        handleUserRegistration,
        handleUserLogin,
        userInfo,
        handleLogOut,
        handleGoogleLogin,
        loading
    };
};

export default useFirebase;