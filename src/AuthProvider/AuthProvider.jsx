import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosSequreCommon from "../AxiosSequreCommon/useAxiosSequreCommon";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosSequreCommon = useAxiosSequreCommon();
    // create user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password )
    }
    // password sign in
    const signIn=(email, password)=>{
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)

    }
    // google sign in
    const googleSignIn = ()=>{
        setLoading(true)

        return signInWithPopup(auth, provider)

    }
    // loh out
    const logOut = ()=>{
        setLoading(true)

        return signOut(auth)

    }

// update profile 
const updateUser = (name, photo)=>{
   return updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photo
      })

}

    // manage users
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if(currentUser){
                // assign token
                // get token and store client in local storage
                const userInfo = {
                    email : currentUser.email
                }
                axiosSequreCommon.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                   
                })



            } 
            else{
                // TODO: remove token if token stored in client side- local storage, caching, in memory
                // remove token from local storage
                localStorage.removeItem('access-token')
                setLoading(false)


            }

        })
        return ()=> unSubscribe()

    },[axiosSequreCommon])

    const allInfo={
        user,
        setUser, 
        loading,
        signIn,
        googleSignIn,
        createUser,
        logOut, 
        updateUser



    }

    return (
        <AuthContext.Provider value={allInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;