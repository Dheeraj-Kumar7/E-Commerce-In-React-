import React from 'react'
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs"
import "./Cart.css"
import CartItem from './CartItem/CartItem';
import { useSelector } from 'react-redux';
const Cart = ({setShowCart}) => {
const cartItem=useSelector((store)=>store.sendProduct)
console.log(cartItem)
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
        {cartItem.map((productItem)=> <CartItem key={productItem.id} productItem={productItem}/>)}
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