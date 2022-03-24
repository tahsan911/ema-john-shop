import React from 'react';
import './Cart.css'
// Fix kor ai jayga ta karon eikhaner 1 ta row te 2 ta component bosbe aisa aita fix kor.  2 ta component add korte hobe
const Cart = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center sticky-top height">
            <h2 className='border-bottom p-3 border-dark'>Order Summary</h2> 
            <p className="fw-thin">Selected Items: #</p>
            <p className="fw-thin">Total Price: $</p>
            <p className="fw-thin">Total Shipping Charge: $</p>
            <p className="fw-thin">Tax: $</p>
            <h5 className="fw-thin">Grand Total: $</h5>
        </div>
    );
};

export default Cart;