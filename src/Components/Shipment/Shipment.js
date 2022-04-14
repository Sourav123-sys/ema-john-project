import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../../firebase.init';

const Shipment = () => {
    
    const [name, setName] = useState(' ')
    const [error, setError] = useState('')
    const [address, setAddress] = useState(' ')
    const [number,setNumber] = useState(' ')
const [email,setEmail] = useState(' ')

const [user] = useAuthState(auth)

   
 
    const handleAddresslBlur = e => {
        setAddress(e.target.value);
    }
    const handleNumberlBlur = e => {
        setNumber(e.target.value);
    }
    const handleNameBlur = e => {
        setName(e.target.value);
    }
  
   
    const handleCreateUser = e => {
        e.preventDefault();
        
        const shipping = { name,email,address,number}
        console.log(shipping)
        
    }
    return (
        <div className='form-container'>

            <div>
                <h2 className='form-title'>Shipping-Information</h2>

                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor='text'>Name</label>
                        <input value={user?.displayName} onBlur={handleNameBlur} type='text' name='name' placeholder='Enter your name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input value={user?.email} readOnly type='email' name='email' placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='address'>Address</label>
                        <input onBlur={handleAddresslBlur} type='text' name='address' placeholder='Enter your address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='number'>Phone</label>
                        <input onBlur={handleNumberlBlur} type='number' name='number' placeholder='Enter your number' required />
                    </div>

                 
                

                    <input style={{marginBottom:"20px"}} className='form-submit' type='submit' value='Add-Shipping' />
                </form>
               
                
            </div>
        </div> 
    );
};

export default Shipment;