import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [loding, setLoding] = useState(true);
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    // google Login 
    const googleLoginHandler = () => {
        return signInWithPopup(auth, googleProvider);

    }

    // logout 
    const logOut = () => {
        signOut(auth)
            .then(result => {
                alert('successfully LogOut');
                setUser({});
            }).finally(() => {
                setLoding(false)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setLoding(false);
        });
    }, []);
    return {
        loding,
        googleLoginHandler,
        user,
        logOut


    }
};
export default useFirebase;