import React from "react";
import "./Shop.css";
import { addToDb, getShoppingCart } from "../utilities/fakedb";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/public/fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect( () =>{
    const storedCard = getShoppingCart();
    const savedCart = [];
    for(const id in storedCard){
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            const quantity = storedCard[id];
            addedProduct.quantity= quantity;
            savedCart.push(addedProduct)
        }
        setCart(savedCart);
    }   
  },[products])


  const handleAddtoCart = (product) => {
    let newCart = [];
    const exists = cart.find(pd => pd.id === product.id);

    if (!exists){
        product.quantity = 1;
        newCart = [...cart, product]
    }
    else{
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter(pd => pd.id !== product.id)
        newCart = [...remaining,exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddtoCart={handleAddtoCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
