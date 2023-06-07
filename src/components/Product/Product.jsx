import React from 'react';
import './Product.css'

const Product = (props) => {
    const{img,name,price,quantity,ratings,ratingsCount,seller,shipping,stock} = props.product
    return (
        <div className='product'>
          <div>
            <img src={img}  alt=''/>
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>price: ${price}</p>
            <p>Manufacturer: {seller} </p>
            <p>Ratings: {ratings} stars </p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
          </div>
        </div>
    );
};

export default Product;