import React from 'react'
import { MdClose } from 'react-icons/md'
import "./Search.css"
import prod from "../../../assets/Images/back2.jpg"
const Search = ({ setShowSearch }) => {
  return (
    <div className='search-model'>
      <div className="form-field">
        <input type="text" autoFocus
          placeholder='search for product' />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="" width={20}/>
            </div>
            <div className="prod-details">
              <span className="name">product name</span>
              <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas consectetur voluptatem quidem ipsam deleniti illum corporis ut temporibus laudantium impedit necessitatibus, natus a vero animi. Fuga minima beatae in!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search