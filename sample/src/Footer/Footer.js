import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../image/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-12 col-sm-6'>
            <div className='footer-left'>
              <div className='logo'>
                <a href="#"><img src={logo} alt="picture"></img></a>
              </div>
              <div className='footericon'>
                <p>400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
              </div>
              <div className='footicons'>
                 <a href="#"><FacebookIcon /></a>
                 <a href="#"><TwitterIcon /></a>
                 <a href='#'><GoogleIcon /></a>
                 <a href='#'><PinterestIcon /></a>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-12 col-sm-5'>
            <div className='footer-about'>
              <h3>About</h3>
            </div>
            <div className='about-icons'>
              <p><a href="#">Shop</a></p>
              <p><a href="#">Delivery</a></p>
              <p><a href="#">Returns</a></p>
            </div>
          </div>
          <div className='col-lg-2 col-12 col-sm-6'>
            <div className='footer-about'>
              <h3>Help</h3>
            </div>
            <div className='about-icons'>
                  <p><a href="#">Payment Options</a></p>
                  <p><a href="#">Contact Us</a></p>
            </div>
          </div>
          <div className='col-lg-3 col-12 col-sm-5'>
            <div className='footer-new'>
              <h3>NEWLETTER</h3>
            </div>
            <div className='subscribers'>
              <form class="subscribe-type">
                <input type="email" id="Your Email" name="subscribe"  placeholder="Your email address"></input>
                <button class="footbtn btn-outline fs-6">subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer