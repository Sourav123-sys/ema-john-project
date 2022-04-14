import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'
const Product = (props) => {
   //console.log(props.send)
    const { category, name, seller, ratings, price, stock, ratingsCount, img, shipping, quantity } = props.send






    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='p-info'>
            <p className="p-name">Name:{name}</p>
            <p>Category:{category}</p>
            <p>Price:$ {price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings} stars</small></p>
          
            </div>
            <button onClick={()=>props.sendEventHandler(props.send)}className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;