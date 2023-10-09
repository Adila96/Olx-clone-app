import React from "react";
import { useEffect, useState } from "react";
import "./View.css";
import { useParams } from "react-router-dom";
import { AddCartContext } from "../../Store/AddtoCartContext";
import { useContext } from "react";
import { PostContext } from "../../Store/PostContext";
function View() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const { addToCart } = useContext(AddCartContext);
  const{postDetails}=useContext(PostContext);
  useEffect(() => {
    console.log("params", params.productId.substring(1, 2));
    if(params.productId.includes("0",0)){
      setProduct(postDetails)
    }else{
      fetch(
        "https://fakestoreapi.com/products/" + params.productId.substring(1, 2)
      ).then((productResponse) => {
        productResponse.json().then((data) => {
          setProduct(data);
          console.log(data);
        });
      });
    }
    
  }, []);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={product.image ? product.image : product.thumbnail} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>{"$ " + product.price}</p>
          <span>{product.title}</span>
          <p>{product.category}</p>
          <span>{product.description}</span>
        </div>
        <div
          className="addCart"
          onClick={() => {
            addToCart(product);
          }}
        >
          <p className="cartBtn">ADD TO CART</p>
        </div>
      </div>
    </div>
  );
}
export default View;
