import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice *7 /100;
    const grandTotal = totalPrice + tax + totalShipping


    return (
        <div className='cart'>
            <h3>Order summery</h3>
            <p>Selected Item : { cart.length }  </p>
            <p>Total Price : {totalPrice}  </p>
            <p>Total Shipping :{totalShipping}  </p>
            <p>Tax : {tax.toFixed(2)} </p>
            <p>Grand Total: {grandTotal.toFixed(2)}  </p>
        </div>
    );
};

export default Cart;