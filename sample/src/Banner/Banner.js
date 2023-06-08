import React from 'react'
import icon from '../image/icon.png';
import rev_home9_1 from '../image/rev_home9_1.webp';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner-section'>
      <div className='container'>
        <div className='bannerbg'>
          <img src={icon} alt="picture"></img>
        </div>
        <div class="bannercontent">
          <h2>Kento - Chair</h2>
          <p>Shop Now</p>
          <img src={rev_home9_1} alt="picture"></img>
        </div>
      </div>
    </div>
  )
}

export default Banner