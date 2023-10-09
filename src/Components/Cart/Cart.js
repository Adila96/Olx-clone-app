import React, { useContext } from "react";
import CartIcon from "../../Assets/AddToCartIcon";
import "./Cart.css";
import { AddCartContext } from "../../Store/AddtoCartContext";
import Delete from "../../Assets/Delete";

function Cart() {
  
  const { productDetails,removeFromCart } = useContext(AddCartContext);
  console.log("Cart entry product",productDetails);
  
  return (
    <div>
      <div className="cart">
        <div className="heading">
          <span>Your Cart</span>                        
          <CartIcon></CartIcon>
        </div>
        <div className="cards">
          {productDetails.map((products) => {
            console.log("productdetails map entry",products)
            return(
            <div className="card">
                <div className="favorite"
                onClick={()=>{
                    removeFromCart(products);
                }}>
                    <Delete></Delete>
                </div>
              <div className="image">
                <img src={products.image ? products.image : products.thumbnail} alt="" />
              </div>
              <div className="content">
                <p className="rate">${products.price}</p>
                <span className="category">{products.category}</span>
                <p className="name"> {products.title}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
