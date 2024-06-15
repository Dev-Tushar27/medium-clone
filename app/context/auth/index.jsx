"use client"
import { createContext, useContext, useState, useEffect, use } from "react";
import { auth, db } from '../../../firebaseConfig';
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


const AuthContext = createContext();
export const AuthProvider =({children})=>{
    const [user,setUser] = useState(null);
    const [loading, setIsLoading] = useState(false);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setIsLoading(false);
        });
    
        return () => unsubscribe();
    }, []);
    
    async function addUser(user) {
        await setDoc(doc(db, 'users', user.email),{
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    }
    async function loginUser(provider){
        try {
            const userData = await signInWithPopup(auth, provider);
            const user = userData.user;
            setUser(user);
            addUser(user);
        } catch (error) {
            console.error("Error during sign in:", error);
        }
    }
    async function logOutUser(){
        try{
            await signOut(auth);
        }catch(error){
            console.error("Error during sign out:", error);
        }
    }
    
    return(
        <AuthContext.Provider value={{ 
            user,
            loading,
            loginUser,
            logOutUser
        }}
        >
            {children}
        </AuthContext.Provider>
    )
    
}
    
export const useAuth = ()=>{return useContext(AuthContext);}