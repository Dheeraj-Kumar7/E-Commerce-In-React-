import React from 'react'
import Newslette from './Newsletter/Newslette'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import "./footer.css"
const Footer = () => {
  return (
    <>
      <Newslette />
      <footer className='footer'>
        <div className="footer-content">
          <div className="col">
            <div className="title">about</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae mollitia, consectetur natus dolorum nihil. Placeat inventore velit veritatis, laborum atque, dolorum, adipisci rerum porro asperiores cumque iste pariatur eius repellendus a expedita? Eum, porro. Minima eum voluptatem consequuntur est.
            </div>
          </div>
          <div className="col">
            <div className="title">contact</div>
            <div className="c-item">
              <FaLocationArrow />
              <div className="text">
                198-A, SK-1, Sector-93, Noida, Uttar Pradesh
              </div>
            </div>
            <div className="c-item">
              <FaMobileAlt />
              <div className="text">
                Phone No:7042276834
              </div>
            </div>
            <div className="c-item">
              <FaEnvelope />
              <div className="text">
                Email:rautdheeraj@314gmail.com
              </div>
            </div>
          </div>
          <div className="col">
            <div className="title">categories</div>
            <span className="text">jai siya ram</span>
            <span className="text">jai siya ram</span>
            <span className="text">jai siya ram</span>
            <span className="text">jai siya ram</span>
            <span className="text">jai siya ram</span>
            <span className="text">jai siya ram</span>
          </div>
          <div className="col">
            <div className="title">pages</div>
            <span className="text">jai siya ram</span>
            <span className="text">jai siya ram</span>
            <span className="text">jai siya ram</span>
            <span className="text">jai siya ram</span>
            <span className="text">jai siya ram</span>
            <span className="text">jai siya ram</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              Dheeraj Web Developer
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer