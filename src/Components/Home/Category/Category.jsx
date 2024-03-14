import React from 'react'
import style from "./Category.module.css"
import { useNavigate } from 'react-router-dom'

const Category = ({img,id}) => {
  const navigate=useNavigate();
  return (
    <div className={style.shopbycategory}>
      <div className={style.categories}>
        <div className={style.category} onClick={()=>navigate(`/singleproduct/${id}`)}>
          <img src={img} alt="ram" />
        </div>
      </div>
      
    </div>
  )
}

export default Category