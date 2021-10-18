import React, { useState, useEffect } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [userInfo, setUserInfo] = useState(null);

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
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
            });
    }

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // ...
                console.log(user);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
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
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorMessage);
            });
    }

    return {
        handleUserRegistration,
        handleUserLogin,
        userInfo,
        handleLogOut,
        handleGoogleLogin
    };
};

export default useFirebase;