import React from "react";
import "./Banner.css";
import bannerImg from "../../../assets/Images/P9.jpg";
import Button from "./Button/Button";
const Banner = () => {
  
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>sales</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            blanditiis eos vel consectetur facilis labore possimus omnis atque
            eaque dolore.
          </p>
          <div className="Main-Button">
          <Button Assignment="Assignment"/>
            <Button Assignment="Contact"/>
          </div>
        </div>
        <img className="banner-img"  src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
