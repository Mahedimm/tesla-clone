import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/useSlice";
import initialize from "../Firebase/firebase.initialize";

initialize();

const useFirebase = () => {
    const dispatch = useDispatch();
    // const nevigate = useNavigate();

    const[user, setUser] = useState({});
    const[error, setError] = useState('');
    const[isLoading, setIsLoading] = useState(true);
  
    const [name,setName] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
     //Google Sign In 
     const signInUsingGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    
    
    
    //sign up using email password
    const handleSignUp = (email,password,name)=>{
            
     
        // const regix = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
        
        // if(regix.test(password)===false){
        //     setError('password must be a minimum of 8 characters including number, Upper, Lower And one special character !')
        //     return;
        // }

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            verificationEmail();
            result.updateProfile({
                displayName: name,
              }).then(() => {
                dispatch(
                  login({
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                  })
                )
                // nevigate('/account')
              })
        })
        .catch((error) => {
            setError(error.message);
        
        });
        
    }



  //sign in using email password
  const handleSignIn = (email,password) =>{
    setIsLoading(true);
   
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('');  
})
.catch((error) => {
setError(error.message);
});
  }




//verificationEmail
const  verificationEmail = ()=>{
    sendEmailVerification(auth.currentUser)
    .then((result) => {
      // Email verification sent!
      console.log(result);
      // ...
    });
}


//set user Name
const setUserName = ()=>{
    updateProfile(auth.currentUser,{
        displayName: name,
    })
    .then(result=>{ 

    })

}

//observe user state change
useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, user=>{
        if (user){
            setUser(user);
        }
        else{
            setUser({})
        }
        setIsLoading(false);
    });
    return ()=>unsubscribed;
},[])

const signOutGoogle = ()=>{
    setIsLoading(true);
    signOut(auth)
    .then(()=>{
        setUser({});
    })
    .catch((error)=>{

    })
    .finally(()=>setIsLoading(false));
}


return{
    user,
    error,isLoading,
    signInUsingGoogle,
    signOutGoogle,
    handleSignIn,
    handleSignUp,
    
}

}

export default useFirebase;