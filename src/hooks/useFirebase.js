import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signOut,signInWithPopup,updateProfile ,onAuthStateChanged } from "firebase/auth";

// initialize firebase app
initializeFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
    const [authError,setAuthError]=useState();
    const [admin, setAdmin]=useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser=(email,password,name,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('');
            const newUser= {email,displayName: name};
            setUser(newUser);
            // save uset to the database
            saveUser(email,name,'POST');
            updateProfile(auth.currentUser, {
                displayName: name, 
                }).then(() => {
                }).catch((error) => {
                });
            history.replace('/');
            })
            .catch((error) => {
            const errorCode = error.code;
            setAuthError(error.message);
            console.log(error)
            // ..
            })
            .finally(()=>setIsLoading(false));

    }

    const loginUser=(email,password,location,history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination =location?.state?.from || '/';
            history.replace(destination);
            
            setAuthError('');
            
        })
        .catch((error) => {
            const errorCode = error.code;
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
        
    }

    const signInWithGoogle=(location,history)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
    .then((result) => {
    const user = result.user;
    saveUser(user.email,user.displayName,'PUT')
    setAuthError('');
    const destination=location?.state?.from || '/';
    history.replace(destination);
    }).catch((error) => {
        setAuthError(error.message);
    }).finally(()=>setIsLoading(false));
    }

    // observer user state
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
            });
            return ()=> unsubscribed;
    },[])

    useEffect(()=>{
            fetch(`http://localhost:5000/registeredusers/${user.email}`)
            .then(res=>res.json())
            .then(data=>setAdmin(data.admin))
    },[user.email])

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {

            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            })
            .finally(()=> setIsLoading(false));
    }

    const saveUser=(email,displayName,method)=>{
        const user ={email,displayName};
        fetch('http://localhost:5000/registeredusers',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
            
        })
    }

    return{
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;