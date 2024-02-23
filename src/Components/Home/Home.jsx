import React from 'react'
import Banner from "./Banner/Banner.jsx"
import Category from './Category/Category.jsx'
import style from "./Home.module.css"
import Products from '../Products/Products.jsx'
const Home = () => {
  return (
    <div>
      <Banner />
      <div className={style.mainContent}>
        <div className={style.layout}>
          <Category />
          <Products headingTitle="Popular Product"/>
        </div>
      </div>
    </div>
  )
}

export default Home