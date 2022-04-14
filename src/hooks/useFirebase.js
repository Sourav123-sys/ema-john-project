import  { useEffect, useState } from 'react';


import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import app from '../firebase.init';
//import app from '../firebase.init'


const auth = getAuth(app)



const useFirebase = () => {
  const provider = new GoogleAuthProvider();
    
const [user,setUser] = useState({})

//     useEffect(() => {
    
// })

    const signWithGoogle = () => {
        console.log("coming soon...")
        signInWithPopup(auth, provider)
  .then((result) => {
  
    // The signed-in user info.
      const user = result.user;
    setUser(user)
    
      console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
      console.log(error.message);

  });
    }

return {user,setUser,signWithGoogle}
};

export default useFirebase;

