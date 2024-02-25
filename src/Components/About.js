import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
library.add(fas, fab);

const About = () => {

  const Caticonquantity=useSelector(mystate=>mystate.cart.totalQuanity)  

  return (
    <>
      <section className="header">
    <a href="#"><img src="e-commerce-logo-removebg-preview.png" wclassNameth="65px" height="40px" className="logo" /></a>

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
              <Link to='/about'>About</Link>
            </li>
           
            <li>
             
              <Link  to='/cart'><FontAwesomeIcon icon={['fas', 'cart-shopping']} /></Link>
                  <span className="cart-quantity">{Caticonquantity}</span>
            
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
<div className="nav-bar-font-icon">
<i className="fa-solclassName fa-bars  bars"></i>
<i className="fa-solclassName fa-cart-shopping  responsive-shopiinf-cart"></i>
</div>


</div>

</section>

<section className="heroshopabout">
<div className="heroshoptext">
    <h4>#KnowUS</h4>
<p>Lorem ipsum dolor sit amet consectetur</p>
</div>
</section>

<section className="about-head">
<img src="aboutshopping.jpg" />
<div className="aboutdetails">
<h2>Who We Are?</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incclassNameclassNameunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolorei eu fugiat nulla pariatur. Excepteur sint occaecat cupclassNameatat non proclassNameent, sunt in culpa qui officia dolore deserunt mollit anim className est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat.</p>
<abbr>Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes</abbr>






</div>


</section>

<section className="about-app section-p1">
<h1>Download our <a href="#">App</a></h1>
<vclassNameeo autoplay muted loop controls>
    <source src="BEST Interactive Commercial Advertisement VclassNameeo XTVT Mobile Apps.mp4" type="vclassNameeo/mp4"  />
    
  </vclassNameeo>


</section>


<section className="feature section-p1">
    <div className="container">
        <img src="free-shipping-removebg-preview.png" />
        <h6>Free Shipping</h6>
    </div>
    <div className="container">
        <img src="online-order-removebg-preview.png" />
       <h6>Online Order</h6>
    </div>
    <div className="container">
        <img src="save-money-removebg-preview.png" />
        <h6>Save Money</h6>
    </div>
    <div className="container">
        <img src="promotion-removebg-preview.png" />
        <h6>Promotions</h6>
    </div>
    <div className="container">
        <img src="sell-removebg-preview.png" />
        <h6>Happy Sell</h6>
    </div>
    <div className="container">
        <img src="24hours-removebg-preview.png" />
        <h6>f24/7 Support</h6>
    </div>
    </section>

<section className="newsletter">
<div className="newstext">
<h4>Sign Up for News Letters</h4>
<p>Get E-mail Updates about our latest shop and <span>specific offers</span></p>
</div>
<div className="forms">
<input type="text" placeholder="Your Email Adress" /><button>Sign Up</button>



</div>
</section>

<footer className="section-p1">
<div className="col">
<img src="e-commerce-logo-removebg-preview.png " className="E-commerce-logo" width="73px" height="60px" />
<h4 className="contacts">Contacts</h4>
<p><strong>Address:</strong>Near Ghanta Ghar Main Chowk Multan</p>
<p><strong>Phone:</strong>+923265742517</p>
<p><strong>Hours:</strong>10:00 to 8:00, Mon-Sat</p>
<div className="Follow">
<h4>Follow Us</h4>
<div className="follow-links">
<a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjg4NTYwMDY2LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"><i className="fab fa-facebook-f fa-1x"></i></a>
<a href="https://www.instagram.com/"><i className="fab fa-instagram fa-1x"></i>
</a>
<a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den"><i className="fab fa-twitter fa-1x"></i>
</a>

<a href="#"><i className="fab fa-pinterest-p"></i></a>
<a href="#"><i className="fa-brands fa-youtube"></i></a>
</div>



</div>
</div>


<div className="col">
<h4>About</h4>
<a href="#">About Us</a>
<a href="#">Delivery Information</a>
<a href="#">Privacy Policy</a>
<a href="#">Terms And Condition</a>
<a href="#">Contact Us</a>
</div>


<div className="col">
<h4>My Account</h4>
<a href="#">Sign In</a>
<a href="#">View Cart</a>
<a href="#">My Wishlist</a>
<a href="#">Track My Order</a>
<a href="#">Help</a>
</div>



<div className="col">
<h4>Install App</h4>
<p>From App Store Or Google Play</p>
<div className="row">
<img src="realaaple.png"  wclassNameth="150px" height="100px" />
<img src="googlelogo-removebg-preview-removebg-preview.png" wclassNameth="150px" height="100px" />


</div>
<p>Secured Payment Gateways</p>
<img src="https://www.autorug.com/images/AcceptedPaymentMethods.jpg" wclassNameth="230px" height="150px" />

</div>

</footer>
<div className="copy-rights">
<p>@ 2021 Tech2 etc-HTML CSS E-commerce Templates</p>
</div>
    </>
  )
}

export default About
