import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { cartSliceActions } from "./Uislice";
import { useDispatch, useSelector } from "react-redux";

library.add(fas, fab);

const products = [
  {
    id: 1,
    img: "6-piece-non-stick-baking-set.webp",
    name: "6-piece-non-stick-baking-set",
    price: 45,
  },
  {
    id: 2,
    img: "6-piece-white-dinner-plate-set.jpg",
    name: "6-piece-white-dinner-plate-set",
    price: 32,
  },
  {
    id: 3,
    img: "adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "adults-plain-cotton-tshirt-2-pack-teal",
    price: 20,
  },
  {
    id: 4,
    img: "athletic-cotton-socks-6-pairs.jpg",
    name: "athletic-cotton-socks-6-pairs",
    price: 15,
  },
  {
    id: 5,
    img: "floral-mixing-bowl-set.jpg",
    name: "floral-mixing-bowl-set",
    price: 56,
  },
  {
    id: 6,
    img: "bathroom-rug.jpg",
    name: "bathroom-rug",
    price: 28,
  },
  {
    id: 7,
    img: "black-2-slot-toaster.jpg",
    name: "black-2-slot-toaster",
    price: 65,
  },
  {
    id: 8,
    img: "duvet-cover-set-blue-twin.jpg",
    name: "duvet-cover-set-blue-twin",
    price: 40,
  },
  {
    id: 9,
    img: "intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    price: 90,
  },
  {
    id: 10,
    img: "women-chiffon-beachwear-coverup-black.jpg",
    name: "women-chiffon-beachwear-coverup-black.jpg",
    price: 75,
  },
  {
    id: 11,
    img: "plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    price: 50,
  },
  {
    id: 12,
    img: "luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    price: 80,
  },
  {
    id: 13,
    img: "liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent",
    price: 38,
  },
  {
    id: 14,
    img: "women-beach-sandals.jpg",
    name: "women-beach-sandals",
    price: 23,
  },
  {
    id: 15,
    img: "round-sunglasses-black.jpg",
    name: "round-sunglasses",
    price: 18,
  },
  {
    id: 16,
    img: "blackout-curtain-set-beige.webp",
    name: "blackout-curtain-set-beige.webp",
    price: 60,
  },
  {
    id: 17,
    img: "men-slim-fit-summer-shorts-gray.jpg",
    name: "en-slim-fit-summer-shorts-gray",
    price: 30,
  },
  {
    id: 18,
    img: "electric-glass-and-steel-hot-water-kettle.webp",
    name: "electric-glass-and-steel-hot-water-kettle",
    price: 55,
  },
  {
    id: 19,
    img: "facial-tissue-2-ply-18-boxes.jpg",
    name: "facial-tissue-2-ply-18-boxes",
    price: 42,
  },
  {
    id: 20,
    img: "straw-sunhat.webp",
    name: "straw-sunhat",
    price: 70,
  },
  {
    id: 21,
    img: "sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    price: 85,
  },
  {
    id: 22,
    img: "women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    price: 48,
  },
  {
    id: 23,
    img: "women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    price: 25,
  },
  {
    id: 24,
    img: "men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    price: 68,
  },
  {
    id: 25,
    img: "trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    price: 72,
  },
  {
    id: 26,
    img: "duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    price: 35,
  },
  {
    id: 27,
    img: "women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    price: 22,
  },
  {
    id: 28,
    img: "men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    price: 42,
  },
  {
    id: 29,
    img: "men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    price: 65,
  },
  {
    id: 30,
    img: "men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    price: 80,
  },
  {
    id: 31,
    img: "vanity-mirror-silver.jpg",
    name: "vanity-mirror-silver.jpg",
    price: 90,
  },
  {
    id: 32,
    img: "women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    price: 38,
  },
];
const Home = () => {


  const items = useSelector((state) => {
    return state.cart.Cartitems;
  });

  console.log("items are ", items);

  const dispatch = useDispatch();
  const AddcartHandler = (myitem) => {
    return dispatch(cartSliceActions.AddtocartHandler(myitem));
  };

  const Caticonquantity = useSelector((mystate) => mystate.cart.totalQuanity);

  return (
    <>
      <section className="header">
        <img
          src="e-commerce-logo-removebg-preview.png"
          width="65px"
          height="40px"
          className="logo"
        />
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
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon={["fas", "cart-shopping"]} />
              </Link>
              <span className="cart-quantity">{Caticonquantity}</span>
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
      </section>
      <section className="hero">
        <div className="hero-detail">
          <h4>Trade-in-0ffer</h4>
          <h2>Super value deals</h2>
          <h1>On all products</h1>
          <p>Save more with coupons and upto 70% off!</p>
          <Link to='/cart'><button>Shop Now</button></Link>
        </div>
        <img alt=" " src="boy.png" height="500px" />
      </section>
      <section className="feature section-p1">
        <div className="container">
          <img alt=" " src="free-shipping-removebg-preview.png" />
          <h6>Free Shipping</h6>
        </div>
        <div className="container">
          <img alt=" " src="online-order-removebg-preview.png" />
          <h6>Online Order</h6>
        </div>
        <div className="container">
          <img alt=" " src="save-money-removebg-preview.png" />
          <h6>Save Money</h6>
        </div>
        <div className="container">
          <img alt=" " src="promotion-removebg-preview.png" />
          <h6>Promotions</h6>
        </div>
        <div className="container">
          <img alt=" " src="sell-removebg-preview.png" />
          <h6>Happy Sell</h6>
        </div>
        <div className="container">
          <img alt=" " src="24hours-removebg-preview.png" />
          <h6>f24/7 Support</h6>
        </div>
      </section>

      <section className="product1 section-p1">
        <h2>Featured Products</h2>

        <div className="pro-container">
          {products.map((product) => {
            return (
              <div key={product.id} className="pro">
                <img src={product.img} width="250px" height="150px" />
                <div className="des">
                  <h5>{product.name}</h5>
                  <div className="stars">
                    <FontAwesomeIcon
                      icon={["fas", "star"]}
                      className="fas fa-star"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={["fas", "star"]}
                      className="fas fa-star"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={["fas", "star"]}
                      className="fas fa-star"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={["fas", "star"]}
                      className="fas fa-star"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={["fas", "star"]}
                      className="fas fa-star"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={["fas", "star"]}
                      className="fas fa-star"
                    ></FontAwesomeIcon>
                  </div>
                  <h4>{product.price + "$"}</h4>
                  <button
                    onClick={() =>
                      AddcartHandler({
                        id: product.id,
                        image: product.img,
                        name: product.name,
                        price: product.price,
                      })
                    
                    }
                    className="add-to-cart"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="banner section-m1">
        <h4>Repair Services</h4>
        <h2>
          Upto <span>70%</span> Off All Prodcuts&Acessories
        </h2>
        <button>Explore More</button>
      </section>
      <section className="newsletter">
        <div className="newstext">
          <h4>Sign Up for News Letters</h4>
          <p>
            Get E-mail Updates about our latest shop and{" "}
            <span>specific offers</span>
          </p>
        </div>
        <div className="forms">
          <input type="text" placeholder="Your Email Address" />
          <button>Sign Up</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img
            src="e-commerce-logo-removebg-preview.png "
            className="E-commerce-logo"
            width="73px"
            height="60px"
          />
          <h4 className="contacts">Contacts</h4>
          <p>
            <strong>Address:</strong>Near Ghanta Ghar Main Chowk Multan
          </p>
          <p>
            <strong>Phone:</strong>+923265742517
          </p>
          <p>
            <strong>Hours:</strong>10:00 to 8:00, Mon-Sat
          </p>
          <div className="Follow">
            <h4>Follow Us</h4>
            <div className="follow-links">
              <a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjg4NTYwMDY2LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D">
                <i className="fab fa-facebook-f fa-1x"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram fa-1x"></i>
              </a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den">
                <i className="fab fa-twitter fa-1x"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
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

        <div className="col ">
          <h4>Install App</h4>
          <p>From App Store Or Google Play</p>
          <div className="row">
            <img alt=" " src="realaaple.png" width="150px" height="100px" />
            <img
              src="googlelogo-removebg-preview-removebg-preview.png"
              width="150px"
              height="100px"
              alt=""
            />
          </div>
          <p>Secured Payment Gateways</p>
          <img
            src="https://www.autorug.com/images/AcceptedPaymentMethods.jpg"
            width="230px"
            height="150px"
            alt=""
          />
        </div>
      </footer>
      <div className="copy-rights">
        <p>@ 2021 Tech2 etc-HTML CSS E-commerce Templates</p>
      </div>
    </>
  );
};

export default Home;
