import React from 'react'
import Products from '../Products/Products'
// import {useParams} from "react-router-dom"
import style from "./Category.module.css"
const Category = () => {
  // const {id}=useParams();
  // const {data}=useFetch()
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