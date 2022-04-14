import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
const Shop = () => {

   const [products,setProducts]  =  useProducts()
//console.log(products)
const[cart,setCart] = useCart(products)





   const handleAddToCart=(product) => {
   // console.log(product)
    const newCart = [...cart,product]
    setCart(newCart)
    addToDb(product.id)
    
}


    return (
   
        <div className="shop-container">
           <div className="product-container">
              
                {
                    products.map(product =><Product send={product}
                        sendEventHandler={handleAddToCart}
                        key={product.id}></Product>)
                }
            </div>

            <div className="cart-container">
                    <Cart send={cart}>
                        <Link to='/order'>
                            <button>Order Review</button>
                        </Link>
                    </Cart>
            </div>
        </div>
    );
};

export default Shop;