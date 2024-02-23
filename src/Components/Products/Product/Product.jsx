import React from 'react'
import productImg from "../../../assets/Images/p6.png.jpg"
import style from "./Product.module.css"
const Product = () => {
  return (
    <div className={style.productCard}>
      <div className={style.thumbnail}>
        <img src={productImg} alt="" />
      </div>
      <div className={style.prodDetails}>
        <span className={style.name}>product name</span>
        <span className={style.price}>&#8377; 499</span>
      </div>
    </div>
  )
}

export default Product