import React, { useState, useEffect } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth();

    const handleUserRegistration = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
            });
    }
    return {
        handleUserRegistration
    };
};

export default useFirebase;