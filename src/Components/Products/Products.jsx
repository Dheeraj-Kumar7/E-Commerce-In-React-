import React from 'react'
import Product from './Product/Product'
import style from "./Products.module.css"
const Products = ({innerPage,headingTitle}) => {

  return (
    <div className={style.productsContainer}>
      {!innerPage && <div className={style.secHeading}>{headingTitle}</div>}
      <div className={style.products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Products