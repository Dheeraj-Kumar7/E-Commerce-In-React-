import React from 'react'
import { MdClose } from 'react-icons/md'
import "./CartItem.css"
const CartItem = ({productItem}) => {
      return (
            <div className='cart-products'>
                  <div className="cart-product">
                        <div className="img-container">
                              <img src={productItem.img} alt="" />
                        </div>
                        <div className="prod-details">
                              <span className="name">{productItem.name}</span>
                              <MdClose className='close-btn' />
              <div className="quantity-button">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <div className="text">
                <span>{productItem.qty}</span>
                <span>x</span>
                <span>&#8377;{productItem.price} =
                  <span className='highlight'>&#8377; 999999</span>
                </span>
              </div>
                        </div>
                  </div>
            </div>
      )
}

export default CartItem