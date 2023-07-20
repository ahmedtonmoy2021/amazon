import React from 'react';
import './Shop.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch('/public/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddtoCart = (product) => {
        const newCart = [...cart,product];
        setCart(newCart)
      }

    return (
        <div>
            <div className='shop-container'>

<div className='products-container'>
{
    products.map(product => <Product
    key={product.id}
    product = {product}
    handleAddtoCart ={handleAddtoCart}
    ></Product>)
}
</div>


<div className='cart-container'>
    <Cart cart={cart}></Cart>
</div>
</div>
        </div>
    );
};

export default Shop;