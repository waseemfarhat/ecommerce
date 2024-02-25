import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from './Uislice';
import './Home.css'

library.add(fas, fab);

const Cart = () => {
  const Caticonquantity=useSelector(mystate=>mystate.cart.totalQuanity)  

  const items=useSelector(state=>state.cart.Cartitems)

  let Subtotal=0

  items.map((singleitem)=>{
    Subtotal=singleitem.totalprice+Subtotal
    return Subtotal
  })


  const Carts=useSelector(state=>state.cart.Cartitems)

const dispatch=useDispatch()

const AddquantityHandler=(id)=>{
dispatch(cartSliceActions.Addquantityfunction(id))

}

const Removequantityhandler=(myid)=>{
dispatch(cartSliceActions.Removequantityfunction(myid))
}


const RemoveProductHandler=(id)=>{

dispatch(cartSliceActions.RemoveFromCartHandler(id))
}





  return (

<>
<section className="header">
    <a href="#"><img src="e-commerce-logo-removebg-preview.png" width="65px" height="40px" className="logo"/></a>

    <div>
       
<ul className="navbar">
<li><i className="fa-solclassName fa-x  cross-icon"></i></li>
<li><Link to='/'>Home</Link></li>
<li><Link to='/shop'>Shop</Link></li>
<li><Link to='/blog'>Blog</Link></li>
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

<section className="heroshopcontact">
<div className="heroshoptext">
    <h4>#Cart</h4>
<p>Add your coupon code & SAVE upto 70%!</p>
</div>
</section>


<section className="cart section-p1">
<table width="100%">

    <thead>
        <tr>
        <td>Remove</td>
        <td>Image</td>
        <td>Product</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Subtotal</td>
        <td>Add/Remove</td>
        </tr>
        </thead>

        
        

<tbody className="thecarttabledata">



{Carts.map((singleitem)=>{
  return <tr>
  <td><a href="#">
   <button className='add-to-cart' onClick={()=>RemoveProductHandler(singleitem.id)}>Remove</button>
  </a>
  </td>
  <td><img src={singleitem.image}  width= '70px' height='70px'/></td>
  <td>{singleitem.name}</td>
  <td>{`${singleitem.price}$`}</td>
  <td><input type="number" value={singleitem.quantity} /></td>
  <td>{`${singleitem.totalprice}$`}</td>
 <td><button onClick={()=>AddquantityHandler(singleitem.id)} className='add-to-cart'>+</button>
 <button  onClick={()=>Removequantityhandler(singleitem.id)} className='add-to-cart'>-</button></td> 
  </tr>
})}























</tbody>




</table>

</section>



<section className="coupon-and-cart-total section-p1">
<div className="coupon">
<h4>Apply Coupon</h4>
<input type="text" placeholder="Enter Your Coupon" /><button>Apply</button>


</div>

<div className="cart-total">
<h4>Cart Totals</h4>
<table>
<tbody>
<tr>
<td>Cart Subtotal</td>
<td><span className="subtotalprice">{`${Subtotal}$`}</span></td>

</tr>


<tr>
    <td>Shipping</td>
    <td><span>Free</span></td>
    
    </tr>



    <tr>
        <td className="total">Total</td>
        <td><span className="totalprice">{`${Subtotal}$`}</span></td>
        
        </tr>

</tbody>


</table>

<button>Proceed to Checkout</button>
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
<img src="realaaple.png"  width="150px" height="100px" />
<img src="googlelogo-removebg-preview-removebg-preview.png" width="150px" height="100px" />


</div>
<p>Secured Payment Gateways</p>
<img src="https://www.autorug.com/images/AcceptedPaymentMethods.jpg" width="230px" height="150px"/>

</div>

</footer>
<div className="copy-rights">
<p>@ 2021 Tech2 etc-HTML CSS E-commerce Templates</p>
</div>
</>
  )
}

export default Cart
