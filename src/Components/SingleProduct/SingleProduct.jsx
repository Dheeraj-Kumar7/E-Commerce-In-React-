import React from 'react'
import "./SingleProduct.css"
import Data from "../../Data/Data.js"
import { useNavigate } from 'react-router-dom';
import RelatedProduct from './RelatedProduct/RelatedProduct';
import SelectedProduct from '../SelectedProduct/SelectedProduct.jsx';
const SingleProduct = () => {
  const navigate=useNavigate()
  // console.log(Data)
  return (
    <div className='singleProductMainContent'>
      <div className="layout">
        {/* {Data.filter((item)=> ((item.id===navigate(`/singleproduct/${item.id}`)) ? <SelectedProduct key={item.id} id={item.id} img={item.img} name={item.price}  /> :<SelectedProduct/>))} */}
        <SelectedProduct/>
        <RelatedProduct/>
      </div>
    </div>
  )
}

export default SingleProduct