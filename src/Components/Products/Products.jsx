import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import Product from './Product/Product'
import style from "./Products.module.css"

const Products = ({innerPage,headingTitle}) => {
  const product=useSelector((store)=>store.addProduct)
console.log(product)

  return (
    <div className={style.productsContainer}>
      {!innerPage && <div className={style.secHeading}>{headingTitle}</div>}
      <div className={style.products}>
        {product.map((item)=>(
          <Product key={item.id} name={item.name} price={item.price} img={item.img} id={item.id} item={item}/>

        ))}
        
      </div>
    </div>
  )
}

export default Products