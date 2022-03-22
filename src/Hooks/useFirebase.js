import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();
// Firebase authentication are being used here
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle =()=>{
      return signInWithPopup(auth, googleProvider)
        .finally(()=> setLoading(false))
    }
    const register = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmail=(email,password)=>{
    return    signInWithEmailAndPassword(auth, email, password)
    .finally(()=> setLoading(false))
    }
    useEffect(()=>{
    const unscribed=    onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setLoading(false)
        })
        return ()=> unscribed
    },[auth])


    const logOut =()=>{
        signOut(auth)
        .then(()=>{

        })
        .catch(error=> alert(error.message))
        .finally(()=> setLoading(false))
    }

    return {
        signInWithGoogle,
        setUser,
        user,
        logOut,
        register,
        isLoading,
        signInWithEmail
    }

};

export default useFirebase;