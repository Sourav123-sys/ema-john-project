import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword,useSignInWithGithub,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Login.css';
import image from '../../s1AjSxph_400x400.jpg';
import image2 from '../../github-mark.png'
import { auth } from '../../firebase.init';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';






//import useFirebase from '../../hooks/useFirebase';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithGoogle, name] = useSignInWithGoogle(auth)
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
      );
   const [
    signInWithEmailAndPassword,
    user,
  loading,
    error,
] = useSignInWithEmailAndPassword(auth);
    
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);

    }
    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email,password);

    }

  
    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    if (user || user1) {
        navigate(from,{replace:true})
    }
    let errorMsg;
    if (error || error || error2) {
    errorMsg = <p className='text-danger'>Error : {error?.message} {error1?.message} {error2?.message}</p>;
    }
    
   
// google login with firebase
    
   //const {signWithGoogle} = useFirebase()
    
    
    
    
   // react-firebase-hooks
   const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then( () =>{
        navigate(from, {replace: true})
    })
    }
   
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            // alert("check your mail for reset password...")
             toast("check your mail for reset password...");
        }
        else {
            toast('please,give us your email..')
       }
    }
    
    return (
        <div className='form-container'>

            <div>
                <h2 className='form-title'>Sign-In</h2>

                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>

                        <input onBlur={handleEmailBlur} type='email' name='email' placeholder='Give the email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='password'>PassWord</label>
                        <input onBlur={handlePasswordBlur} type='password' name='password' placeholder='Give the correct password' required />
                    </div>
                  {errorMsg}
                    
                    {
                    
                        (loading || loading1)  && <p>Loading...</p>
                    
                    }
                    {
                        sending &&<p>sending...</p>
                    }
                    <input className='form-submit' type='submit' value='SignIn' />

                </form>

                <div className='or-style'>
                <div style={{ height: '1px',width:'50%',backgroundColor: 'black',marginRight: '20px'}} className='w-50'></div>
                <p className='mt-2 px-2'> or </p>
                <div style={{ height: '1px',width:'50%',backgroundColor: 'black',marginLeft: '20px'}} className=' w-50'></div>
                </div>
                

                <button onClick={handleGoogleSignIn}className="google-sign">
                    <div>
                        <img src={image} alt=''/>
                    </div>
                    <p>Sign In With Google</p>
                </button>
                <button onClick={()=> signInWithGithub()}className="github-sign">
                    <div>
                        <img src={image2} alt=''/>
                    </div>
                    <p>Sign In With Github</p>
                </button>
                {/* <button onClick={signWithGoogle}className="google-sign">
                    <div>
                        <img src={image} alt=''/>
                    </div>
                    <p>Sign In With Google</p>
                </button> */}
                <p>

                    New To Ema-John?<Link className='form-link' to='/signup'>Create an Account</Link>

                </p>
                <p >

                    Forget Password ? <span className='form-link reset' onClick={resetPassword }>Reset Password</span> 

                </p>
                <ToastContainer />
            </div>
        </div>

    );
};

export default Login;

