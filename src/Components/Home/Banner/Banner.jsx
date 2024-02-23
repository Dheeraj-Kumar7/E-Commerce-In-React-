import React from "react";
import "./Banner.css";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
const Banner = () => {
  
  return (
    <div className="hero-banner">
        <div className="text-content">
          <h1>sales</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            blanditiis eos vel consectetur facilis labore possimus omnis atque
            eaque dolore.
          </p>
          
            <div className="Main-Button">
            <Link to="product"> <Button Assignment="Assignment"/></Link>
            <Button Assignment="Contact"/>
          </div>
        </div>
    </div>
  );
};

export default Banner;
