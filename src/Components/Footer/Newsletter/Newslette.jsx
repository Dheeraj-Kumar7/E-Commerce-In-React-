import React from "react";
import "./Newsletter.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const Newslette = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">sign up for latest updates and offer</span>
        <div className="form">
          <input type="text" placeholder="email address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          will be used in accordance with our privacy policy
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={21} />
          </div>
          <div className="icon">
            <FaTwitter size={21} />
          </div>
          <div className="icon">
            <FaInstagram size={21} />
          </div>
          <div className="icon">
            <FaLinkedin size={21} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslette;
