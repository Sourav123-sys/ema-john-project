import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{send} = props
    // console.log(send)
    // console.log(props)

let total = 0;
let shipping = 0;
{
    send.map(pr=>{total = total + pr.price;
  
    shipping = shipping+pr.shipping;
  

}
        
        )
}


const tax =(total *10 /100) .toFixed(2)
const grandTotal=(parseInt(total) +parseInt(shipping ) +parseInt(tax) ).toFixed(2)

    return (
        <div className='cart'>
             <h3>Order Summary</h3>
             
                <p>Selected products : {props.send.length}</p>
                <p>Total Price:{total}</p>
                <p>Total Shipping:{shipping}</p>
                <p>Tax:{tax}</p>
                <h4>Grand Total:{grandTotal}</h4>
                {props.children}
        </div>
    );
};

export default Cart;