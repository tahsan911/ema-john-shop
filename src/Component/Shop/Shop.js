import React, { useEffect, useState } from 'react';
import './Shop.css'
import Body from '../Body/Body';
import Cart from '../Shopping-cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col col-sm-12 col-md-6 col-lg-9">
                    <div className='row g-4 mt-1'>
                        {
                            products.map(product => <Body key={product.id} product={product} addToCart={addToCart}>product</Body>)
                        }
                    </div>
                </div>
                <div className="col col-sm-12 col-md-6 col-lg-3 bg-golden">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;