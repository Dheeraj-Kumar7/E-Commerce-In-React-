import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from 'react-icons/fa';
import "./SingleProduct.css"
import prod from "../../assets/Images/hireme-logo.png"
import RelatedProduct from './RelatedProduct/RelatedProduct';
const SingleProduct = () => {
  return (
    <div className='singleProductMainContent'>
      <div className="layout">
        <div className="singleProductPage">
          <div className="left">
            <img src={prod} alt="" />
          </div>
          <div className="right">
            <span className="name">product name</span>
            <span className="price">price</span>
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
        <RelatedProduct/>
      </div>
    </div>
  )
}

export default SingleProduct