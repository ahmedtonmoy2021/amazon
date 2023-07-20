import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{img,name,price,ratings,seller} = props.product
    
    const handleAddtoCart = props.handleAddtoCart;
     
 

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
            
            <button onClick={ () => handleAddtoCart(props.product)} className='btn-cart'>Add to Cart
            
            <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
          </div>
        </div>
    );
};

export default Product;