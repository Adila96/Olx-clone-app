import React from 'react';

import './Header.css';
import OlxLogo from '../../Assets/OlxLogo';
import Search from '../../Assets/Search';
import Arrow from '../../Assets/Arrow';
import AddToCartButton from '../../Assets/AddToCartButton';
import AddToCartIcon from '../../Assets/AddToCartIcon';
import { NavLink, useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{
            navigate("/")
        }}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="signup" onClick={()=>{
            navigate("/signup");
        }}>
          <span> Sign Up </span>
        </div>
        <div className="loginPage" onClick={()=>{
            navigate('/login')
        }}>
          <span>Login</span>
        </div>

        <div className="cartMenu" onClick={()=>{
            navigate('/cart')
        }}>
          <AddToCartButton/>
          <div className="cartMenuContent">
            <AddToCartIcon></AddToCartIcon>
            <span>CART</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;