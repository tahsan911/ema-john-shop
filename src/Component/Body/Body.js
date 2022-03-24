import React from 'react';
import './Body.css'
const Body = ({product, addToCart}) => {
    const {name, img, ratings, seller, price} = product
    return (
            <div className="col col-sm-12 col-md-6 col-lg-4">
                <div className="card h-100 border-1 round-5">
                    <img src={img} className="card-img-top round-2" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Price: ${price}</p>
                        <p>Manufactured By: {seller}</p>
                        <p>Ratings: {ratings}</p>
                        <button onClick={() => addToCart(product)} className='btn btn-warning w-100'>Add to Cart</button>
                    </div>
                </div> 
            </div>   
    );
};

export default Body;