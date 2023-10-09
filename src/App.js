import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ViewPost from "./Pages/ViewPost";
import CartProvider from "./Store/AddtoCartContext";
import AddTCartPage from "./Pages/AddTCartPage";
import Post from "./Store/PostContext";

function App() {
  return (
    <div>
      <Post>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path={"/view/:productId"} element={<ViewPost />}></Route>
            <Route path="/cart" element={<AddTCartPage></AddTCartPage>}></Route>
          </Routes>
        </CartProvider>
      </Post>
    </div>
  );
}

export default App;
