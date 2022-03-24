import React from 'react';
import './Cart.css'
// Fix kor ai jayga ta karon eikhaner 1 ta row te 2 ta component bosbe aisa aita fix kor.  2 ta component add korte hobe
const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    let tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tax

    return (
        <div className="d-flex flex-column align-items-center justify-content-center sticky-top height">
            <h2 className='border-bottom p-3 border-dark'>Order Summary</h2> 
            <p className="fw-thin">Selected Items: {cart.length}</p>
            <p className="fw-thin">Total Price: ${total}</p>
            <p className="fw-thin">Total Shipping Charge: ${shipping}</p>
            <p className="fw-thin">Tax: ${tax}</p>
            <h5 className="fw-thin">Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;