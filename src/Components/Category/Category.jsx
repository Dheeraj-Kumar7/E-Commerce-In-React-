import React from 'react'
import Products from '../Products/Products'
import style from "./Category.module.css"
const Category = () => {
  return (
    <div className={style.categoryMainContent}>
      <div className={style.layout}>
        <div className={style.categoryTitle}>
        </div>
        <Products headingTitle="Category Product"/>
      </div>
    </div>
  )
}

export default Category