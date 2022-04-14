import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase.init'

const SignUp = () => {


    const [email, setEmail] = useState(' ')
    const [name, setName] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [confirmPassword, setConfirmPassword] = useState(' ')
    const [error, setError] = useState('')
const [agree,setAgree] = useState(false)
const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
const [updateProfile, updating, error3] = useUpdateProfile(auth);
    console.log(email, name, password, confirmPassword)
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const navigate = useNavigate()
   // console.log(name)
    // if (user) {
    //     navigate('/shop')
    // }
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handleNameBlur = e => {
        setName(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
        console.log(e.target.value)
    }

   

    const handleCreateUser = async e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("password must be at least 6 characters")
            return;
        }
        console.log(password, confirmPassword)
        if (password !== confirmPassword) {
            setError("password didn't match")
            return;
        }

      
           await createUserWithEmailAndPassword(email, password)
           await updateProfile({ displayName : name});
           alert('Updated profile');
           navigate('/shop')
     
    }
    
    return (
        <div className='form-container'>

            <div>
                <h2 className='form-title'>Sign-Up</h2>

                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor='text'>Name</label>
                        <input onBlur={handleNameBlur} type='text' name='name' placeholder='Enter your name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type='email' name='email' placeholder='Enter your email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='password'>password</label>
                        <input onBlur={handlePasswordBlur} type='password' name='password' placeholder='Enter your password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='confirm-password'>Confirm-password</label>
                        <input onBlur={handleConfirmPasswordBlur} type='password' name='password' placeholder='confirm your password' required />
                    </div>

                    <input onClick={()=>setAgree(!agree) }type='checkbox' name='terms' id="terms" />
                    <label className={ agree ? ' text-primary':' text-danger'}htmlFor="terms">Accept Terms and Conditions</label>
                   
                    <input
                        disabled={!agree}
                        className='form-submit'
                        type='submit'
                        value='Sign-Up' />
                </form>
                <p style={{ color: 'red' }}>{error} {error3?.message}</p>
                {

                    loading && <p>Loading...</p>

                }
                <p>

                    Already Have an Account?<Link className='form-link' to='/login'>Sign-In</Link>

                </p>
            </div>
        </div>
    );
};

export default SignUp;