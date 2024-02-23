import React from 'react'
import style from "./Category.module.css"
import cat1 from "../../../assets/Images/p5.png.jpg"
const Category = () => {
  return (
    <div className={style.shopbycategory}>
      <div className={style.categories}>
        <div className={style.category}>
          <img src={cat1} alt="" />
        </div>
        <div className={style.category}>
          <img src={cat1} alt="" />
        </div>
        <div className={style.category}>
          <img src={cat1} alt="" />
        </div>
        <div className={style.category}>
          <img src={cat1} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Category