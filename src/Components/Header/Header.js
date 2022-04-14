import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase.init';
import logo from "../../images/Logo.svg"
import {  signOut } from 'firebase/auth';
import './Header.css'
import image from '../../no-image.png'
const Header = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
    };
    console.log(user)
    
    // use profile-pic

    
    const avater = image
    const userImg = user?.photoURL ? user?.photoURL : avater;
    return (
        <nav className='header'>
            <img src={logo} alt='' />

            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <button className="sign-out" onClick={logout}>Sign Out</button>
                        :
                        <Link to="/login">Sign-In</Link>
                }
               
             
                
            </div>
        
            <Link style={{ color: "White"} }to="/shop">Name: {user? user.displayName : "Login-first"}</Link>
           
            <img className="pp-img"src={userImg} alt='' />
        </nav>
    );
};

export default Header;