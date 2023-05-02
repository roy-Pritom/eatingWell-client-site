import React, {createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, SetUser] = useState(null);
    const [loading, SetLoading] = useState(true);
    // for get user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            SetUser(currentUser)
            SetLoading(false)
           
        })
        return () => {
            unsubscribe();
        }
    }, [])


    // signUp
    const createUser = (email, password) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logIn = (email, password) => {
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    // logOut
    const logOut = () => {
        SetLoading(true)

        return signOut(auth)

    }

    // google login
    const googleLogin=()=>{

     return signInWithPopup(auth,googleProvider)

    }
    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading,
        googleLogin,

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;