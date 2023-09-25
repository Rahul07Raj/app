import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 


const Header = () => {
  return (
    <nav className="navbar sticky">
        <div class="logo">
          <img
            src="https://img1.wsimg.com/isteam/ip/d34ada36-7020-4f77-9234-dce946fc15f9/blob-a8eee09.png/:/rs=w:370,h:208,cg:true,m/cr=w:370,h:208/qt=q:95"
            alt=""
          />
        </div>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>

    </nav>
  );
};

export default Header;
