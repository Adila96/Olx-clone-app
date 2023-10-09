import React, { useContext, useEffect, useState } from "react";

import Heart from "../../Assets/Heart";
import "./Post.css";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../Store/PostContext";

function Posts() {
  const [productList, setProductList] = useState([]);
  const [products, setProducts] = useState([]);
  const{setPostDetails}=useContext(PostContext);
  async function getProductsForReccommendation() {
    const response = await fetch("https://dummyjson.com/products"); // fetch the products
    const data = await response.json(); // convert the response to json
    setProducts(data.products); // set the products in the state to the products we fetched
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((productResponse) => {
      productResponse.json().then((data) => {
        setProductList(data);
        console.log(data);
      });
    });
    getProductsForReccommendation();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
        </div>
        <div className="cards">
          {productList.map((product) => {
            return (
              <div
                className="card"
                onClick={() => {
                  
                  navigate("/view/:"+product.id);
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <div className="content">
                  <p className="rate">{"$" + product.price}</p>
                  <span className="category">{product.category}</span>
                  <p className="name">{product.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map((product) => {
            return (
              <div className="card" onClick={() => {
                setPostDetails(product);
                navigate("/view/:0");
              }}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.thumbnail} alt="" />
                </div>
                <div className="content">
                  <p className="rate">${product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.title}</p>
                </div>
                <div className="date">
                  <span>10/5/2021</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
