import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {sendSliceAction} from "../../../store/sendCart"
import style from "./Product.module.css"
const Product = ({img,name,price,id,item}) => {
  // const navigate=useNavigate()
  const dispatch=useDispatch()
  return (
    <div className={style.productCard} onClick={()=>dispatch(sendSliceAction.sendData(item))}>
      <div className={style.thumbnail}>
        <img src={img} alt="" />
      </div>
      <div className={style.prodDetails}>
        <span className={style.name}>{name}</span>
        <span className={style.price}>&#8377; {price}</span>
      </div>
    </div>
  )
}

export default Product