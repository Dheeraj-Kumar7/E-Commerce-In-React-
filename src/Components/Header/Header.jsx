import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../utils/Context";
import Cart from "../Cart/Cart.jsx";
import Search from "./Search/Search.jsx";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 85) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scroll ? "sticky-header" : ""} `}>
        <div className="header-content">
          <ul className="left">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="product">Product</NavLink>
            </li>
            <li>
              <NavLink to="category">Categories</NavLink>
            </li>
          </ul>
          <div className="center">
            <NavLink to="/">Content Lekhakh</NavLink>
          </div>
          <div className="right">
            <FaSearch />
            <FaRegHeart />
            <span className="cart-icon">
              <FaShoppingCart />
              <span>3</span>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
