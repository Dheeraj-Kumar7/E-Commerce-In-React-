import React from 'react'
import prod from "../../../assets/Images/back2.jpg"
import { MdClose } from 'react-icons/md'
import "./CartItem.css"
const CartItem = () => {
      return (
            <div className='cart-products'>
                  <div className="cart-product">
                        <div className="img-container">
                              <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                              <span className="name">product name</span>
                              <MdClose className='close-btn' />
              <div className="quantity-button">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <div className="text">
                <span>3</span>
                <span>x</span>
                <span>&#8377;23333 =
                  <span className='highlight'>&#8377; 999999</span>
                </span>
              </div>
                        </div>
                  </div>
            </div>
      )
}

export default CartItem