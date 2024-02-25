import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
library.add(fas, fab);
import './Home.css'


const NavigationLinks = () => {
  return (
    <div>
    <ul className="navbar">
      <li>
        <i className="fas fa-times cross-icon"></i>
      </li>
      <li>
        <a href="index.html" className="active">
          Home
        </a>
      </li>
      <li>
        <Link to='/shop'>Shop</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="contact.html">Contact</a>
      </li>
      <li>
       
        <Link  to='/cart'><FontAwesomeIcon icon={['fas', 'cart-shopping']} /></Link>
            <span className="cart-quantity">0</span>
      
      </li>
      <li>
        <a href="#"></a>
      </li>
    </ul>
    <div className="nav-bar-font-icon">
      <i className="fas fa-bars bars"></i>
      <i className="fas fa-cart-shopping responsive-shopiinf-cart"></i>
    </div>
  </div>
  )
}

export default NavigationLinks
