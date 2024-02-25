import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';

library.add(fas, fab);
const Blog = () => {


    const Caticonquantity=useSelector(mystate=>mystate.cart.totalQuanity)  

  return (
    <>
        
<section className="header">
    <a href="#"><img src="/e-commerce-logo-removebg-preview.png" wclassNameth="65px" height="40px" className="logo"/></a>
    <div>
       
<ul className="navbar">
<li><i className="fa-solclassName fa-x  cross-icon"></i></li>
<li><Link to="/">Home</Link></li>
<li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
<li> <Link to='/about'>About</Link></li>

<li> <Link  to='/cart'><FontAwesomeIcon icon={['fas', 'cart-shopping']} /></Link>
<span className="cart-quantity">{Caticonquantity}</span>
</li>

<li><a href="#"></a></li>
</ul>
<div className="nav-bar-font-icon">
<i className="fa-solclassName fa-bars  bars"></i>
<i className="fa-solclassName fa-cart-shopping  responsive-shopiinf-cart"></i>
</div>


</div>

</section>

<section className="heroshopblog">





<div className="heroshoptextblog">
    <h4>#stayhome</h4>
<p>Save more with coupons & upto 70% off</p>
</div>
</section>

<section className="blog">
<div className="blog-box">
                <div className="blog-img">
                <img src="hat.jpeg" />
                </div>

                <div className="blog-details">
                    <h4>"MclassNamenight Elegance Hat"</h4>
                    <p>Elevate your style with our MclassNamenight Elegance Hat, a luxurious dark blue accessory that adds a touch of sophistication to any outfit. </p>
                    <a href="#">Continue Reading</a>
                </div>


</div>

<div className="blog-box">
                    <div className="blog-img">
                    <img src="hoodie-man.jpeg" />
                    </div>
    
                    <div className="blog-details">
                        <h4>"Sunshine Vibes Men's Hoodie"</h4>
                        <p>Brighten up your wardrobe with our Sunshine Vibes Men's Hoodie in a cheerful yellow hue. This hoodie combines comfort and style, making it the perfect choice for a casual and vibrant look. </p>
                        <a href="#">Continue Reading</a>
                    </div>
    
    
</div>
<div className="blog-box">
                        <div className="blog-img">
                        <img src="men with 3piece.webp" />
                        </div>
        
                        <div className="blog-details">
                            <h4>"Nautical Charm Men's Blue Coat"</h4>
                            <p>Elevate your style with our Nautical Charm Men's Blue Coat, a timeless and versatile outerwear piece. Crafted with impeccable attention to detail, this coat exudes sophistication and pairs effortlessly with any outfit.</p>
                            <a href="#">Continue Reading</a>
                        </div>
        
        
</div>

<div className="blog-box">
                            <div className="blog-img">
                            <img src="men-in-red-cloths.jpeg" />
                            </div>
            
                            <div className="blog-details">
                                <h4>"Crimson Allure Men's Attire"</h4>
                                <p>ake a bold statement with our Crimson Allure Men's Attire. This striking ensemble in rich red fabric embodies confclassNameence and style. Whether it's a special event or a night out on the town</p>
                                <a href="#">Continue Reading</a>
                            </div>
            
            
</div>

<div className="blog-box">
                                <div className="blog-img">
                                <img src="watch.webp" />
                                </div>
                
                                <div className="blog-details">
                                    <h4>"Timeless Elegance Wristwatch"</h4>
                                    <p>Introducing our Timeless Elegance Wristwatch, a masterpiece of precision and style. This handcrafted watch combines classNameic design with modern functionality, making it the perfect accessory for any occasion</p>
                                    <a href="#">Continue Reading</a>
                              </div>
                
                
</div>




<div className="blog-box">
                                    <div className="blog-img">
                                    <img src="woman in hoodie.webp" />
                                    </div>
                    
                                    <div className="blog-details">
                                        <h4>"Sleek Noir Women's Hoodie"</h4>
                                        <p>Experience comfort and style with our Sleek Noir Women's Hoodie. This black hoodie is a versatile addition to your wardrobe, blending coziness with a touch of urban chic.</p>
                                        <a href="#">Continue Reading</a>
                                    </div>
                    
                    
</div>


                                    
<div className="blog-box">
                                    <div className="blog-img">
                                    <img src="woman with glasses.jpeg" />
                                    </div>
                    
                                    <div className="blog-details">
                                        <h4>"Tech-Ready Casual Chic"</h4>
                                        <p>Achieve a perfect blend of style and functionality with our "Tech-Ready Casual Chic" ensemble. This outfit features a stylish blue boys' shirt paired with iconic Google accessories</p>
                                        <a href="#">Continue Reading</a>
                                    </div>
                    
                    
</div>
<div className="blog-box">
                                        <div className="blog-img">
                                        <img src="woman with purses.webp" />
                                        </div>
                        
                                        <div className="blog-details">
                                            <h4>"Fashionista's Choice Handbags"</h4>
                                            <p>Elevate your style with our "Fashionista's Choice Handbags." These versatile and chic purses are designed to complement any woman's wardrobe, offering both elegance and practicality.</p>
                                            <a href="#">Continue Reading</a>
                                        </div>
                        
                        
</div>

<div className="blog-box">
                                            <div className="blog-img">
                                            <img src="woman-sleeve-cloths.webp"  />
                                            </div>
                            
                                            <div className="blog-details">
                                                <h4>"Pure Elegance White Sleeve Collection</h4>
                                                <p>Step into sophistication with our "Pure Elegance White Sleeve Collection" for women. This curated selection of white-sleeved clothing exudes timeless charm and versatility.</p>
                                                <a href="#">Continue Reading</a>
                                            </div>
                            
                            
</div>


<div className="blog-box">
                                                <div className="blog-img">
                                                <img src="womanwithpurse.webp" />
                                                </div>
                                
                                                <div className="blog-details">
                                                    <h4>"Golden Chain Noir Purse"</h4>
                                                    <p>Product Description:
                                                        Elevate your accessory game with our "Golden Chain Noir Purse." This black purse features a stunning gold-color chain strap that adds a touch of luxury and elegance to your outfit. </p>
                                                    <a href="#">Continue Reading</a>
                                                </div>
                                
                                
</div>
</section>





<section className="pagination section-p1">
<a href="#">1</a>
<a href="#">2</a>
<a href="#">
  <FontAwesomeIcon icon={['fa', 'arrow-right-long']} className="solclassName" />
</a>



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

export default Blog
