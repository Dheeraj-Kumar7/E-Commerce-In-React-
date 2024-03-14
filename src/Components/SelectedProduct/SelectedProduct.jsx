import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from 'react-icons/fa';

const SelectedProduct = ({img,id,name,price}) => {
     
  return (
      <div className="singleProductPage">
      <div className="left">
        <img src={img} alt="" />
      </div>
      <div className="right">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="desc">product description</span>
        <div className="cart-buttons">
          <div className="quantity-button">
            <span>-</span>
            <span>4</span>
            <span>+</span>
          </div>
          <button className='add-to-cart-button'>
            <FaCartPlus size={20}/>
            ADD to CART
          </button>
        </div> 
        <span className="divider"/>
        <div className="info-item">
          <span className='text-bold'>
            category:
            <span>headphone</span>
          </span>
          <span className="text-bold">
            share:
            <span className="social-icons">
              <FaFacebookF size={16}/>
              <FaTwitter size={16}/>
              <FaInstagram size={16}/>
              <FaLinkedinIn size={16}/>
              <FaPinterest size={16}/>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SelectedProduct