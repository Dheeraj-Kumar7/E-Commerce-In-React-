import React from 'react'
import Banner from "./Banner/Banner.jsx"
import Category from './Category/Category.jsx'
import style from "./Home.module.css"
import SmallData from "../../Data/Data.js"
import Products from '../Products/Products.jsx'


const Home = () => {
  let SmallDataa = SmallData[0].SmallData
  return (
    <div>
      <Banner />
      <div className={style.mainContent}>
        <div className={style.layout}>
          {SmallDataa.map((item) => (
            <Category key={item.id} img={item.img} id={item.id}/>
          ))}
        </div>
          <Products headingTitle="Popular Product" />
      </div>
    </div>
  )
}

export default Home