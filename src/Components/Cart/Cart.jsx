import React from 'react'
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs"
import "./Cart.css"
import CartItem from './CartItem/CartItem';
const Cart = ({setShowCart}) => {

  return (
    <div className='cart-panel'>
      <div className="opac-layer">
        jai siya ram
      </div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={()=>setShowCart(false)}><MdClose/>
          <span className="text">close</span></span>
        </div>
        {/* <div className="empty-cart">
          <BsCartX/>
          <span>no products in the cart</span>
          <button className='return-btn'>return to shop</button>
        </div> */}
        <>
        <CartItem/>
        <div className="cart-footer">
          <div className="subtotal">
            <span className="text">subtotal:</span>
            <span className="text-total">&#8377;1234</span>
          </div>
          <div className="button">
            <button className="checkout-cta">checkout</button>
          </div>
        </div>
        </>
      </div>
    </div>
  )
}

export default Cart